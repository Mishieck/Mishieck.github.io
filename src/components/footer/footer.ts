import { $create } from "odom";
import markup from "./footer.xml";
import styles from "./footer.scss";

export const footer = async () => {
  const options = { id: "mishieck-github-io-footer", markup, styles: styles.toString() };
  return $create(options);
};
