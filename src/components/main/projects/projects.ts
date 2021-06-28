import { $create } from "odom";
import markup from "./projects.xml";
import styles from "./projects.scss";

export const projects = async () => {
  return $create({
    id: "mishieck-github-io-projects",
    markup,
    styles: styles.toString()
  });
};
