import { $create } from "odom";

export const app = async () => {
  const props = { id: "app" };
  const options = { scope: document, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
