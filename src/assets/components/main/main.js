import { $riu } from "riu-component";
import { boundary } from "../boundary.js";
import { about } from "./about/about.js";
import { skills } from "./skills/skills.js";
// import { projects } from "./projects/projects.js";
// import { contactForm } from "./contact-form/contact-form.js";


const markup = `
  <main riu-ml="xml" html="main">
    <about riu-src="about" html="section" class="section"></about>
    <boundary riu-src="boundary"></boundary>
    <skills riu-src="skills" html="section" class="section"></skills>
    
    <!--
    <projects riu-src="projects" html="section" class="section"></projects>
    <contact-form html="section" riu-src="contactForm" class="section"></contact-form>
    -->
  </main>
`;

const styles = `
  .section > [xml="heading"] {
    text-align: center;
    font-size: var(--primary-heading);
    color: var(--dark-color);
  }

  .section {
    padding: 5vw;
  }

  .section > [xml="body"] {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 576px) {
    :root {
      --primary-heading: 1.7rem;
    }
  }

  @media (min-width: 768px) {
    :root {
      --primary-heading: 2rem;
    }
  }
`;

export const main = async ({ link, name, icon }) => {
  const utils = {
    components: { boundary, about, skills }
  };

  const schema = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $riu(schema);
};

