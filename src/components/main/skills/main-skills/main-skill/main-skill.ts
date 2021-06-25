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

  const options = { props, markup, styles: styles.toString(), utils };
  return $create(options);
};
