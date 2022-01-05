import { $create } from "odom";
import markup from "./pyramid.xml";
import styles from "./pyramid.scss";
import pictureSrc from "/src/assets/images/portfolio-pic.png";

export const pyramid = async () => {
  const utils = {
    data: {
      pictureSrc
    }
  };

  return $create({
    id: "mishieck-github-io-pyramid",
    markup,
    styles: styles.toString(),
    utils
  });
};
