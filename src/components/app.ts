import { $create } from "odom";
import { page } from "./page/page";
import markup from "./app.xml";
import styles from "./styles.scss";

export const app = async () => {
  const options = {
    id: "app",
    markup,
    styles: PrefixFree.prefixCSS(styles),
    utils: {
      components: { page }
    }
  };

  return $create(options);
};
