import { $create } from "odom";
import markup from "./main-skill.xml";
import styles from "./main-skill.scss";

export const mainSkill = async ({ name }) => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
