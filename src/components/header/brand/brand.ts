import { $create } from "odom";
import { name } from "./name/name";
import markup from "./brand.xml";
import styles from "./brand.scss";

export const brand = async (props) => {
  const utils = {
    components: { name }
  };

  const options = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $create(options);
};
