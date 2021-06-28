import { $create } from "odom";
import { mainSkills } from "./main-skills/main-skills";
import { specificSkills } from "./specific-skills/specific-skills";
import markup from "./skills.xml";
import styles from "./skills.scss";

export const skills = async () => {
  const utils = {
    components: { mainSkills, specificSkills }
  };

  return $create({
    id: "mishieck-github-io-skills",
    markup,
    styles: styles.toString(),
    utils
  });
};
