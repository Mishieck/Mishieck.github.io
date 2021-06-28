import { $create } from "odom";
import markup from "./main-skill.xml";
import styles from "./main-skill.scss";

type Props = {
  name: string;
};

export const mainSkill = async (props: Props) => {
  const utils = {
    texts: { name: props.name }
  };

  return $create({
    id: "mishieck-github-io-main-skill",
    props,
    markup,
    styles: styles.toString(),
    utils
  });
};
