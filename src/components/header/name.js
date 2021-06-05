import { $riu } from "riu-component";


const markup = `
  <name riu-ml="xml" html="h1">
    <charactor>M</charactor>
    <charactor>i</charactor>
    <charactor>s</charactor>
    <charactor>h</charactor>
    <charactor>i</charactor>
    <charactor>e</charactor>
    <charactor>c</charactor>
    <charactor>k</charactor>
    <charactor>&#160;</charactor>
    <charactor>M</charactor>
    <charactor>w</charactor>
    <charactor>a</charactor>
    <charactor>l</charactor>
    <charactor>e</charactor>
  </name>
`;

const styles = `
  :scope {
    --duration: 1.4s;
    --delay: 0.1s;
    
    margin: 5vw 0;
    padding: 1vw;
    display: flex;
    justify-content: center;
    font-size: 10vw;
    color: var(--light-colors);
  }
  
  [name="charactor"]:nth-child(1) {
    animation: lighten var(--duration) alternate infinite;
  }
  
  [name="charactor"]:nth-child(2) {
    animation: lighten var(--duration) calc(var(--delay) * 2) alternate infinite;
  }
  
  [name="charactor"]:nth-child(3) {
    animation: lighten var(--duration) calc(var(--delay) * 3) alternate infinite;
  }
  
  [name="charactor"]:nth-child(4) {
    animation: lighten var(--duration) calc(var(--delay) * 4) alternate infinite;
  }
  
  [name="charactor"]:nth-child(5) {
    animation: lighten var(--duration) calc(var(--delay) * 5) alternate infinite;
  }
  
  [name="charactor"]:nth-child(6) {
    animation: lighten var(--duration) calc(var(--delay) * 6) alternate infinite;
  }
  
  [name="charactor"]:nth-child(7) {
    animation: lighten var(--duration) calc(var(--delay) * 7) alternate infinite;
  }
  
  [name="charactor"]:nth-child(8) {
    animation: lighten var(--duration) calc(var(--delay) * 8) alternate infinite;
  }
  
  [name="charactor"]:nth-child(9) {
    animation: lighten var(--duration) calc(var(--delay) * 9) alternate infinite;
  }
  
  [name="charactor"]:nth-child(10) {
    animation: lighten var(--duration) calc(var(--delay) * 10) alternate infinite;
  }
  
  [name="charactor"]:nth-child(11) {
    animation: lighten var(--duration) calc(var(--delay) * 11) alternate infinite;
  }
  
  [name="charactor"]:nth-child(12) {
    animation: lighten var(--duration) calc(var(--delay) * 12) alternate infinite;
  }
  
  [name="charactor"]:nth-child(13) {
    animation: lighten var(--duration) calc(var(--delay) * 13) alternate infinite;
  }
  
  [name="charactor"]:nth-child(14) {
    animation: lighten var(--duration) calc(var(--delay) * 14) alternate infinite;
  }
  
  @keyframes lighten {
    0% {
      text-shadow: 1px 1px 2px rgba(0, 64, 0, 0.67);
      color: var(--light-color);
    }
  
    100% {
      text-shadow: 0px 0px 0px rgba(0, 64, 0, 0.67);
      color: var(--dark-color);
    }
  }
  
  @media (min-width: 992px) {
    :scope {
      margin: 2vw 0;
      padding: 0.2vw;
      font-size: 3vw;
    }
  }
`;

export const name = async () => {
  const schema = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};

