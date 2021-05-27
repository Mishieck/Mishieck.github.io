import {$riu} from "riu-component";

export const footer = async ({link, name, icon}) => {
  const markup = `
    <footer riu-ml="xml" html="footer">
      <paragraph html="p">
        &#169; 2020-2021, <b html="b">Mishieck Mwale</b>.
      </paragraph>
      <paragraph html="p">
        Icons by 
        <link html="a" href="http://icons8.com/" target="_blank">ICONS8</link>
        and 
        <link html="a" href="http://iconfinder.com/" target="_blank" rel="noopener noreferrer">ICONFINDER</link>.
      </paragraph>
    </footer>
  `;

  const styles = `
    :scope {
      padding: 3vw 5vw;
      text-align: center;
    }
  `;
  const schema = {markup, styles: PrefixFree.prefixCSS(styles)};
  return $riu(schema);
};
