import { $create } from "odom";
import { page } from "./page/page";
import markup from "./app.xml";
import styles from "./app.scss";

export const app = async () => {
  const options = {
    id: "app",
    markup,
    styles: styles.toString(),
    utils: {
      components: { page }
    }
  };

  return $create(options);
};
