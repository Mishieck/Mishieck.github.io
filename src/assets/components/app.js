import { $riu } from "riu-component";


const styles = `
  :root {
    --primary-color: #00ff00;
    --secondary-color: #e7efe7;
    --primary-heading: 1.3rem;
    --secondary-heading: 1.1rem;
    --dark-color: #004000;
    --light-color: #40b040;
    --sm: 576px;
    --md: 768px;
    --lg: 992px;
    --xl: 1200px;
  }
  
  * {
    box-sizing: border-box;
  }

  [xml="link"] {
    text-decoration: none;
    color: var(--light-color);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--secondary-color);
  }
`;

export const app = async () => {
  const props = { id: "app" };
  const schema = { scope: document, styles };
  return $riu(schema);
};