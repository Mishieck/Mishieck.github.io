import { $riu } from "riu-component";
import { mainSkills } from "./main-skills.js";
import { specificSkills } from "./specific-skills.js";


const markup = `
  <skills riu-ml="xml" class="section">
    <heading>
      <h2 html="h2">Skills</h2>
    </heading>
    <body class="body">
      <main-skills riu-src="mainSkills"></main-skills>
      <specific-skills riu-src="specificSkills"></specific-skills>
    </body>
  </skills>
`;

const styles = `
  .skills [xml="heading"] {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--secondary-heading);
    color: var(--dark-color);
  }

  .skills [xml="body"]  {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media (min-width: 576px) {
    :root {
      --secondary-heading: 1.3rem;
    }
  }
  
  @media (min-width: 768px) {
    :root {
      --secondary-heading: 1.6rem;
    }
  }
  
  @media (min-width: 1200px) {
    :root {
      --secondary-heading: 2.2rem;
    }
  }
`;

export const skills = async () => {
  const utils = {
    components: { mainSkills, specificSkills }
  };

  const schema = { markup, styles, utils };
  return $riu(schema);
};

