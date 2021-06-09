import { $create } from "odom";

export const contactLink = async (props = {}) => {
  const options = { props, markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
