import { $riu } from "riu-component";


export const footer = async ({ link, name, icon }) => {
  const markup = `
    <footer riu-ml="xml" html="footer">
    &#169; 2020-2021, <b html="b">Mishieck Mwale</b>.
    </footer>
  `;

  const styles = `
    :scope {
      padding: 3vw 5vw;
      text-align: center;
    }
  `;
  const schema = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};

