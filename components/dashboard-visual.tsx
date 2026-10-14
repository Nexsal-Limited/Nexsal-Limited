import { Code, Layers, Network } from "@/components/icons";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as s } from "@/utilities/styles/pages.style";

export function DashboardVisual() {
  return (
    <aside className={s.classes.dashboard} aria-label="NexSal platform preview">
      <div className={s.classes.dashboardGlow} aria-hidden="true" />
      <header className={s.classes.dashTop}><span className={s.classes.dashLabel}>NexSal workspace</span><span className={s.classes.status}>Live system</span></header>
      <div className={s.classes.metricGrid}>
        <section className={s.classes.metricMain} aria-label="Workflow performance">
          <span className={s.classes.metricLabel}>Workflow completion</span>
          <div className={s.classes.metricValue}>94.8% <span className={s.classes.metricDelta}>+8.2%</span></div>
          <div className={s.classes.chart} aria-label="Eight-week upward trend"><span /><span /><span /><span /><span /><span /><span /><span /></div>
        </section>
        <div className={s.classes.metricSide}>
          <section className={s.classes.tinyMetric}><Code className={c.classes.icon} /><strong>28</strong><small>active flows</small></section>
          <section className={s.classes.tinyMetric}><Network className={c.classes.icon} /><strong>12</strong><small>connected tools</small></section>
        </div>
      </div>
      <section className={s.classes.activity} aria-label="Recent activity">
        <header className={s.classes.activityHead}><span>Recent activity</span><span>Today</span></header>
        <div className={s.classes.activityList}>
          <div><span className={s.classes.activityIcon}><Layers className={c.classes.icon} /></span><span><strong>Client onboarding approved</strong><small>Growth workspace</small></span><b>2m</b></div>
          <div><span className={s.classes.activityIcon}><Network className={c.classes.icon} /></span><span><strong>Sales data synchronized</strong><small>CRM connection</small></span><b>8m</b></div>
        </div>
      </section>
      <div className={s.classes.orbitBadge} aria-hidden="true">ONE<br />SYSTEM</div>
    </aside>
  );
}
