import { $create } from "odom";
import markup from "./projects.xml";
import styles from "./projects.scss";

export const projects = async () => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
