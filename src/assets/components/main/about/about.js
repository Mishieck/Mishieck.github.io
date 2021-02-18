import { $riu } from "riu-component";
import { cube } from "./cube.js";


const markup = `
  <about riu-ml="xml" class="section">
    <heading>
      <h2 html="h2">About Me</h2>
    </heading>
    <body class="body">
      <cube-wrapper riu-neu="inner xl">
        <cube riu-src="cube"></cube>
      </cube-wrapper>

      <text>
        <paragraph html="p">
          I am mainly a software engineer and graphics designer. 
          I also do database and embedded systems development. 
          In the JavaScript community I am an open source contributor.
        </paragraph>
        <paragraph html="p">
          I authered 
          <link html="a" href="https://github.com/Mishieck/jsonat#readme" title="JSONAT" target="_blank">
            JSONAT
          </link>, 
          a JavaScript library.
          I also authered 
          <link html="a" href="https://github.com/Mishieck/riu-neumorphism#readme" title="RIU Neumorphism" target="_blank">
            RIU Neumorphism
          </link>, 
          a JavaScript framework. 
          I have developed a number of websites and web apps including 
          <link html="a" href="https://youthful-heisenberg-05cfee.netlify.app/" title="Roadal" target="_blank">
            Roadal
          </link>. 
          Most of my work in graphics design is related to web development; 
          icons, logos, mockups, prototypes, image manipulation and the like.
        </paragraph>
        <paragraph html="p">
          I am open minded, always eager to learn, hardworking and always looking for better ways to do things. 
          I am passionate about computer technologies (especially web technologies), computer graphics, 
          Internet of Things (IoT), telecommunications, automation, machine learning and artificial intelligence.
        </paragraph>
      </text>
    </body>
  </about>
`;

const styles = `
  [name="cube-wrapper"] {
    min-height: 90vw;
    position: relative;
  }

  [name="body"] {
    margin: 0;
    padding: 0;
    background-color: var(--secondary-color);
  }
  
  [name="text"] {
    margin: 0;
    padding-top: 5vw;
    color: var(--dark-color);
  }

  [name="text"] [xml="link"]:hover {
    text-decoration: underline;
  }
  
  @media (min-width: 576px) {
    [name="text"] {
      font-size: 1.2rem;
    }
  }
  
  @media (min-width: 992px) {
    [name="body"] {
      flex-direction: row !important;
    }
  
    [name="body"] > * {
      width: 50%;
    }
    
    [name="cube-wrapper"] {
      width: 45vw;
      min-height: 42vw;
    }
  
    [name="text"] {
      padding: 0 0 0 5vw;
      font-size: 1.4rem;
    }
  }
  
  @media (min-width: 1200px) {
    [name="text"] {
      font-size: 1.6rem;
    }
  }
`;

export const about = async ({ link, name, icon }) => {
  const utils = {
    components: { cube }
  };

  const schema = { markup, styles, utils };
  return $riu(schema);
};

