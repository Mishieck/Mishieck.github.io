import { $riu } from "riu-component";
import { mainSkill } from "./main-skill.js";


const markup = `
  <main-skills riu-ml="xml" html="section" class="skills" id="main-skills">
    <heading>
      <h3 html="h3">Main Skills</h3>
    </heading>
    <body class="body">
      <list html="ul" riu-map="@methods.mapper" riu-neu="xs"></list>
    </body>
  </main-skills>
`;

const styles = `
  :scope {
    margin: 0;
    padding: 0;
  }

  [xml="list"] {
    margin: 0;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 5vw;
    list-style-type: none;
    background-color: var(--secondary-color);
  }
  
  @media (min-width: 992px) {
    [xml="list"] {
      grid-template-columns: repeat(2, 1fr);
    }

    [xml="list"] {
      padding: 5vw 0;
    }
  }
`;

export const mainSkills = async ({ link, name, icon }) => {
  const mapper = async () => {
    const creator = async name => {
      const $Skill = await mainSkill({ name });
      return $Skill.scope;
    };

    const res = await fetch("/src/assets/json/main-skills.json");
    const json = await res.json();

    return { data: json.mainSkills, creator };
  };

  const utils = {
    methods: { mapper }
  };

  const schema = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $riu(schema);
};

