import { about } from "./about/about.js";
import { skills } from "./skills/skills.js";
// import { projects } from "./projects/projects.js";
// import { contactForm } from "./contact-form/contact-form.js";

export const main = async ({ link, name, icon }) => {
  const utils = {
    components: { boundary, about, skills }
  };

  const schema = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $riu(schema);
};
