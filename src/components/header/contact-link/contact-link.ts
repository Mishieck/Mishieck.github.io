import { $riu } from "riu-component";

export const contactLink = async (props = {}) => {
  const schema = { props, markup, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};
