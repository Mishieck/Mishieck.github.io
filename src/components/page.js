import { $riu } from "riu-component";
import { header } from "./header/header.js";
import { main } from "./main/main.js";
import { footer } from "./footer/footer.js";
import { boundary } from "./boundary.js";


export const page = async () => {
  const markup = `
    <page riu-ml="xml">
      <header riu-src="header"></header>
      <boundary riu-src="boundary"></boundary>
      <main riu-src="main"></main>
      <boundary riu-src="boundary"></boundary>
      <footer riu-src="footer"></footer>
    </page>
  `;

  const styles = ``;
  const components = { header, main, footer, boundary };
  const utils = { components };
  const schema = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $riu(schema);
};

