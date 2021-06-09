import { $create } from "odom";
import { mainSkill } from "./main-skill/main-skill";

export const mainSkills = async ({ link, name, icon }) => {
  const mapper = async () => {
    const creator = async (name) => {
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
  return $create(schema);
};
