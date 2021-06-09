import { $riu } from "riu-component";

export const app = async () => {
  const props = { id: "app" };
  const schema = { scope: document, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};
