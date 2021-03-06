import { $create } from "odom";
import { cube } from "./cube/cube";
import markup from "./about.xml";
import styles from "./about.scss";

export const about = async () => {
  const attributes = {
    '[xml="link"]': {
      rel: "noopener"
    }
  };

  const utils = {
    components: { cube }
  };

  return $create({
    id: "mishieck-github-io-about",
    markup,
    styles: styles.toString(),
    attributes,
    utils
  });
};
