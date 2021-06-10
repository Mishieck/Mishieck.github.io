import { $create } from "odom";
import markup from "./cube.xml";
import styles from "./cube.scss";

export const cube = async () => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
