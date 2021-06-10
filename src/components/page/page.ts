import { $create } from "odom";
import { header } from "../header/header";
import { main } from "../main/main";
import { footer } from "../footer/footer";
import { boundary } from "../boundary/boundary";
import markup from "./page.xml";
import styles from "./page.scss";

export const page = async () => {
  const components = { header, main, footer, boundary };
  const utils = { components };
  const options = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $create(options);
};
