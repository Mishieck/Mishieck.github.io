import { $create } from "odom";
import { name } from "./name/name";
import markup from "./brand.xml";
import styles from "./brand.scss";

export const brand = async () => {
  const utils = {
    components: { name }
  };

  const options = { markup, styles: styles.toString(), utils };
  return $create(options);
};
