import { $riu } from "riu-component";
import { name } from "./name.js";


const markup = `
  <brand riu-ml="xml">
    <wrapper class="wrapper">
      <logo-wrapper riu-neu="sm">
        <link html="a" href="/">
          <logo html="img" src="/src/assets/images/logo.svg" alt="Logo" title="Logo" />
        </link>
      </logo-wrapper>
      <name riu-src="name" title="name">Mishieck Mwale</name>
      <description html="h2">Software Engineer and Graphics Designer</description>
    </wrapper>
  </brand>
`;

const styles = `
  > [name="wrapper"] {
    margin-top: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
  }
  
  [name="logo-wrapper"] {
    padding: 3vw;
    transition: box-shadow 0.4s;
  }
  
  [name="logo"] {
    object-fit: contain;
    width: 20vw;
    transition: width 0.4s;
  }
  
  [name="logo-wrapper"]:hover [name="logo"] {
    width: 22vw;
  }
  
  [xml="name"], [name="description"] {
    text-align: center;
    color: var(--dark-color);
  }
  
  [name="description"] {
    margin: 0;
    padding: 1.25vw;
    font-size: 5vw;
    font-weight: normal;
  }
  
  @media (min-width: 576px) {
    [name="logo-wrapper"] {
      padding: 1.5vw;
    }
  
    [name="logo"] {
      width: 15vw;
    }
  
    [name="logo-wrapper"]:hover [name="logo"] {
      width: 16.5vw;
    }
  }
  
  @media (min-width: 992px) {
    [name="wrapper"] {
      margin-top: 0;
    }
  
    [name="logo-wrapper"] {
      padding: 0.8vw;
    }
  
    [name="logo"] {
      width: 8vw;
    }
    
    [name="logo-wrapper"]:hover [name="logo"] {
      width: 8.8vw;
    }
    
    [name="description"] {
      padding: 0.1vw;
      font-size: 1.5vw;
    }
  }
`;

export const brand = async props => {
  const utils = {
    components: { name }
  };

  const schema = { markup, styles, utils };
  return $riu(schema);
};

