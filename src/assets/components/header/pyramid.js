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
    --max-padding: 5.625vw;
    --mid-padding: 5vw;
    --min-padding: 4.375vw;
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
    padding: var(--min-padding);
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
      --max-padding: 3.625vw;
      --mid-padding: 3vw;
      --min-padding: 2.375vw;
    }
  }

  @media (min-width: 992px) {
    :root {
      --max-padding: 1.825vw;
      --mid-padding: 1.5vw;
      --min-padding: 1.175vw;
    }
  }
`;

export const pyramid = async props => {
  const schema = { markup, styles };
  return $riu(schema);
};

