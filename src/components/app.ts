import { $create } from "odom";

export const app = async () => {
  const props = { id: "app" };
  const schema = { scope: document, styles: PrefixFree.prefixCSS(styles) };
  return $create(schema);
};
