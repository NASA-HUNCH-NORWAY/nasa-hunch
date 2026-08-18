import type { ReactNode } from "react";

type DetailPanelProps = {
  /** Teksten til venstre i boksen. */
  children: ReactNode;
  /** Punktene til høyre, nummerert i samme rekkefølge. */
  items: string[];
};

export function DetailPanel({ children, items }: DetailPanelProps) {
  return (
    <div className="spaced-dashed-border mt-8 grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
      <div>{children}</div>

      <ol className="m-0 grid list-none grid-cols-1 gap-0 p-0">
        {items.map((item, index) => (
          <li
            key={item}
            className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-4 border-t border-dashed border-foreground/40 py-4"
          >
            <span className="text-accent-blue-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
