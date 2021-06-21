import { $create } from "odom";
import markup from "./boundary.xml";
import styles from "./boundary.scss";

export const boundary = async () => {
  const options = { markup, styles: styles };
  return $create(options);
};
