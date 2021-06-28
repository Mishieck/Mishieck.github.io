import { $create } from "odom";
import markup from "./pyramid.xml";
import styles from "./pyramid.scss";

export const pyramid = async () => {
  const utils = {
    data: {
      pictureSrc: "/src/assets/images/portfolio-pic.png"
    }
  };

  return $create({
    id: "mishieck-github-io-pyramid",
    markup,
    styles: styles.toString(),
    utils
  });
};
