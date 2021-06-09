import { $create } from "odom";

export const contactLink = async (props = {}) => {
  const schema = { props, markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(schema);
};
