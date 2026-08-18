type PageHeaderProps = {
  title: string;
  paragraphs: string[];
};

export function PageHeader({ title, paragraphs }: PageHeaderProps) {
  return (
    <section className="section pt-2! pb-10!">
      <h1 className="m-0 uppercase [text-wrap:normal]">{title}</h1>

      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-5 max-w-[62ch]">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
