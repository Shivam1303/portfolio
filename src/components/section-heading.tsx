type SectionHeadingProps = { index: string; eyebrow: string; title: string; description?: string };

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return <header className="section-heading reveal"><p className="section-index">{index}</p><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div></header>;
}
