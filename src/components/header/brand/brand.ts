import { $create } from "odom";
import { name } from "./name/name";
import markup from "./brand.xml";
import styles from "./brand.scss";
import logo from "/src/assets/images/logo.svg";

export const brand = async () => {
  const utils = {
    data: { logo },
    components: { name }
  };

  return $create({
    id: "mishieck-github-io-brand",
    markup,
    styles: styles.toString(),
    utils
  });
};
