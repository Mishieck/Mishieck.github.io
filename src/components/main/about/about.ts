import { $riu } from "riu-component";
import { cube } from "./cube/cube";

export const about = async () => {
  const utils = {
    components: { cube }
  };

  const schema = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $riu(schema);
};
