import type { LocalizedText as LocalizedTextValue } from "@/types/portfolio";

interface LocalizedTextProps {
  text: LocalizedTextValue;
}

export function LocalizedText({ text }: LocalizedTextProps) {
  return (
    <>
      <span data-copy="en">{text.en}</span>
      <span data-copy="vi">{text.vi}</span>
    </>
  );
}
