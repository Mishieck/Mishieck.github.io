import { $create } from "odom";
import markup from "./contact-form.xml";
import styles from "./contact-form.scss";

export const contactForm = async () => {
  return $create({
    id: "mishieck-github-io-contact-form",
    markup,
    styles: styles.toString()
  });
};
