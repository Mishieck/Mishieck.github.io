import { $create } from "odom";
import markup from "./specific-skill.xml";
import styles from "./specific-skill.scss";

type Props = {
  name: string;
  logo: string;
};

export const specificSkill = async (props: Props) => {
  const utils = {
    texts: { name: props.name }
  };

  const options = { props, markup, styles: styles.toString(), utils };
  return $create(options);
};
