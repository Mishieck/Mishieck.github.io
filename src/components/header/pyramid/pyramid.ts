import { $create } from "odom";
import markup from "./pyramid.xml";
import styles from "./pyramid.scss";

export const pyramid = async () => {
  const options = { markup, styles: styles.toString() };
  return $create(options);
};
