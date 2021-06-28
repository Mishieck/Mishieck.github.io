import { $create } from "odom";
import { about } from "./about/about";
import { skills } from "./skills/skills";
import { boundary } from "../boundary/boundary";
// import { projects } from "./projects/projects.js";
// import { contactForm } from "./contact-form/contact-form.js";
import markup from "./main.xml";
import styles from "./main.scss";

export const main = async () => {
  const utils = {
    components: { boundary, about, skills }
  };

  return $create({
    id: "mishieck-github-io-main",
    markup,
    styles: styles.toString(),
    utils
  });
};
