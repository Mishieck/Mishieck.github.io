import { $create } from "odom";
import markup from "./footer.xml";
import styles from "./footer.scss";

export const footer = async () => {
  const attributes = {
    '[xml="link"]': {
      rel: "noopener"
    }
  };

  return $create({
    id: "mishieck-github-io-footer",
    markup,
    styles: styles.toString(),
    attributes
  });
};
