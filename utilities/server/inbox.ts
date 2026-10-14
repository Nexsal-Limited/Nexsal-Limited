import "server-only";

import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type InboxMessage = {
  id: string;
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  receivedAt: string;
  status: "unread";
};

const dataDirectory = path.join(process.cwd(), ".data");
const inboxPath = path.join(dataDirectory, "inbox.json");
let writeQueue = Promise.resolve();

export async function getMessages(): Promise<InboxMessage[]> {
  try {
    const contents = await readFile(inboxPath, "utf8");
    return JSON.parse(contents) as InboxMessage[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

export async function saveMessage(input: Omit<InboxMessage, "id" | "receivedAt" | "status">) {
  const message: InboxMessage = {
    ...input,
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    status: "unread",
  };

  const operation = writeQueue.then(async () => {
    await mkdir(dataDirectory, { recursive: true });
    const messages = await getMessages();
    const temporaryPath = `${inboxPath}.${process.pid}.tmp`;
    await writeFile(temporaryPath, JSON.stringify([message, ...messages], null, 2), { encoding: "utf8", mode: 0o600 });
    await rename(temporaryPath, inboxPath);
  });

  writeQueue = operation.catch(() => undefined);
  await operation;
  return message;
}
