import type { LocalizedText as LocalizedTextValue } from "@/types/portfolio";

export function LocalizedText({ text }: { text: LocalizedTextValue }) {
  return (
    <>
      <span data-copy="en">{text.en}</span>
      <span data-copy="vi">{text.vi}</span>
    </>
  );
}
