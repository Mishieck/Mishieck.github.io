import { $create } from "odom";
import { specificSkill } from "./specific-skill.js";

export const specificSkills = async () => {
  const mapper = async () => {
    const creator = async (props) => {
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

  const schema = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $create(schema);
};
