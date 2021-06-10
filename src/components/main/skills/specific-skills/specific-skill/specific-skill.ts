import { $create } from "odom";
import markup from "./specific-skill.xml";
import styles from "./specific-skill.scss";

export const specificSkill = async ({ name, logo }) => {
  const options = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $create(options);
};
