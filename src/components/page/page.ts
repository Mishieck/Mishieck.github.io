import { $create } from "odom";
import { header } from "./header/header.js";
import { main } from "./main/main.js";
import { footer } from "./footer/footer.js";
import { boundary } from "./boundary.js";

export const page = async () => {
  const components = { header, main, footer, boundary };
  const utils = { components };
  const options = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $create(options);
};
