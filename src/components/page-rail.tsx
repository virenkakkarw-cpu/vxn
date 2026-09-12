type Section = { href: string; title: string; copy: string };
export function PageRail({ sections }: { sections: Section[] }) { return <aside className="page-rail"><p>ON THIS PAGE</p>{sections.map((section, index) => <a className={index === 0 ? "active" : ""} href={section.href} key={section.href}><b>{section.title}</b><span>{section.copy}</span></a>)}</aside>; }
