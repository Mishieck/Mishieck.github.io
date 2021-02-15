import { $riu } from "riu-component";
import { specificSkill } from "./specific-skill.js";


const markup = `
  <specific-skills riu-ml="xml" html="section" class="skills">
    <heading>
      <h3 html="h3">Specific Skills</h3>
    </heading>
    <body html="section" class="body">
      <list html="ul" riu-map="@methods.mapper"></list>
    </body>
  </specific-skills>
`;

const styles = `
  :scope {
    margin: 0;
    padding: 0;
  }

  [xml="body"] {
    display: flex;
    justify-content: center;
  }

  [xml="list"] {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    gap: 5vw;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 576px) {
    [xml="list"] {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (min-width: 768px) {
    [xml="list"] {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (min-width: 992px) {
    [xml="list"] {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  
  @media (min-width: 1200px) {
    [xml="list"] {
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;


export const specificSkills = async () => {
  const mapper = async () => {
    const creator = async props => {
      const $Skill = await specificSkill(props);
      return $Skill.scope;
    };

    const res = await fetch("/src/assets/json/specific-skills.json");
    const json = await res.json();
    
    return { data: json.specificSkills, creator };
  };

  const utils = {
    methods: { mapper }
  };

  const schema = { markup, styles, utils };
  return $riu(schema);
};

