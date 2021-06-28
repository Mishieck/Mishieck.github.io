import { $create } from "odom";
import markup from "./cube.xml";
import styles from "./cube.scss";

export const cube = async () => {
  return $create({
    id: "mishieck-github-io-cube",
    markup,
    styles: styles.toString()
  });
};
