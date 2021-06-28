import { $create } from "odom";
import markup from "./name.xml";
import styles from "./name.scss";

export const name = async () => {
  const options = { id: "mishieck-github-io-name", markup, styles: styles.toString() };
  return $create(options);
};
