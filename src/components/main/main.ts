import { $create } from "odom";
import { about } from "./about/about";
import { skills } from "./skills/skills";
// import { projects } from "./projects/projects.js";
// import { contactForm } from "./contact-form/contact-form.js";
import markup from "./main.xml";
import styles from "./main.scss";

export const main = async ({ link, name, icon }) => {
  const utils = {
    components: { boundary, about, skills }
  };

  const options = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $create(options);
};
