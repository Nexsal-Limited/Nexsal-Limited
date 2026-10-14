export const products = [
  {
    slug: "nexflow",
    name: "NexFlow",
    label: "Operations",
    description: "A calm command center for projects, teams, approvals, and the work that moves your business forward.",
    features: ["Live operational views", "Automated approvals", "Role-based workspaces"],
    visual: "window" as const,
  },
  {
    slug: "nexconnect",
    name: "NexConnect",
    label: "Integration",
    description: "Connect the tools you already trust with reliable workflows, clean data, and fewer manual handoffs.",
    features: ["API orchestration", "Event monitoring", "Reusable connectors"],
    visual: "nodes" as const,
  },
  {
    slug: "nexguard",
    name: "NexGuard",
    label: "Governance",
    description: "Security, access, and audit controls built into every workflow without slowing your people down.",
    features: ["Granular permissions", "Audit-ready trails", "Policy automation"],
    visual: "shield" as const,
  },
];

export const processSteps = [
  ["01", "Discover the signal", "We map the work, constraints, and outcomes that matter before deciding what to build."],
  ["02", "Design the system", "Product, engineering, and operations shape one focused solution around real users."],
  ["03", "Deliver in slices", "Small, testable releases create momentum and reduce risk across the rollout."],
  ["04", "Improve with evidence", "Usage data and team feedback guide every refinement after launch."],
];

export const faqs = [
  ["Can NexSal work with our current tools?", "Yes. NexSal products are designed to connect with existing platforms through APIs, webhooks, and purpose-built connectors."],
  ["Do you support growing teams?", "Our modular products can start with one workflow and expand across teams, regions, and operational use cases."],
  ["How quickly can we launch?", "A focused first release typically takes a few weeks. Timing depends on integrations, scope, and governance requirements."],
  ["Is the information on this site final?", "No. The product descriptions and business metrics currently shown are representative mock content for this website concept."],
];
