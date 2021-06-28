import { $create } from "odom";
import { page } from "./page/page";
import markup from "./app.xml";
import styles from "./app.scss";

export const app = async () => {
  return $create({
    id: "mishieck-github-io-app",
    markup,
    styles: styles.toString(),
    utils: {
      components: { page }
    }
  });
};
