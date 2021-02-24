import { $riu } from "riu-component";


const markup = `
  <pyramid riu-ml="xml" html="section" class="circles">
    <cylinder name="outermost">
      <cylinder>
        <cylinder>
          <cylinder name="innermost">
            <picture html="img" src="/src/assets/images/portfolio-pic.png" alt="Mishieck Mwale" />
          </cylinder>
        </cylinder>
      </cylinder>
    </cylinder>
  </pyramid>
`;

const styles = `
  :root {
    --cylinder-padding: 4vw;
  }

  :scope {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  * {
    border-radius: 50%;
  }

  [xml="cylinder"] {
    padding: var(--cylinder-padding);
    box-shadow: var(--offset-light) var(--offset-light) var(--blur) 0px rgb(255, 255, 255, 0.4),
    var(--offset-dark) var(--offset-dark) var(--blur) 0px rgba(0, 0, 0, 0.15);
  }

  [name="picture"] {
    object-fit: contain;
    width: 100%;
    background-color: #f7fff7;
  }

  @media (min-width: 576px) {
    :root {
      --cylinder-padding: 3vw;
    }
  }

  @media (min-width: 992px) {
    :root {
      --cylinder-padding: 2vw;
    }
  }
`;

export const pyramid = async props => {
  const schema = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};

