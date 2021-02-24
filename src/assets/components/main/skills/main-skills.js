import { $riu } from "riu-component";
import { prefixfree } from "prefixfree";
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
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 5vw;
    background-color: var(--secondary-color);
  }

  @media (min-width: 576px) {
    [xml="list"] {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (min-width: 768px) {
    [xml="list"] {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  
  @media (min-width: 992px) {
    [xml="body"] {
      padding: 2vw 0;
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

  console.info(prefixfree);

  const schema = { markup, styles, utils };
  return $riu(schema);
};

