import { $create } from "odom";
import markup from "./footer.xml";
import styles from "./footer.scss";

export const footer = async () => {
  const options = { markup, styles: styles.toString() };
  return $create(options);
};
