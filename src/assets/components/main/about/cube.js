import { $riu } from "riu-component";


const markup = `
  <cube riu-ml="xml" html="section">
    <surfaces>
      <surface class="front">
        <image html="img" src="/src/assets/images/main-skills/web-developer.svg" alt="" />
      </surface>
      <surface class="right">
        <image html="img" src="/src/assets/images/main-skills/devices.svg" alt="" />
      </surface>
      <surface class="back">
        <image html="img" src="/src/assets/images/main-skills/dashboard.svg" alt="" />
      </surface>
      <surface class="left">
        <image html="img" src="/src/assets/images/main-skills/server.svg" alt="" />
      </surface>
      <surface class="top"></surface>
      <surface class="bottom"></surface>
    </surfaces>
  </cube>
`;

const styles = `
  :root {
    --cube-length: 56vw;
    --cube-length-neg: -56vw;
    --translation: -28vw;
    --translation-pos: 28vw;
  }

  :scope {
    position: absolute;
    left: 50%;
    top: 50%;
    perspective: 1500px;
  }

  [name="surfaces"] {
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 30s linear infinite;
  }

  [name="surfaces"] > [name="surface"] {
    position: absolute;
    width: var(--cube-length);
    height: var(--cube-length);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #00ff00;
    background: rgba(255, 255, 255, 1);
  }

  [name="surfaces"] > [name="surface"].front {
    transform: translateX(var(--translation)) translateY(var(--translation)) translateZ(var(--translation-pos));
  }

  [name="surfaces"] > [name="surface"].back {
    transform: translateX(var(--translation)) translateY(var(--translation)) translateZ(var(--translation));
  }

  [name="surfaces"] > [name="surface"].right {
    transform: translateY(var(--translation)) rotateY(90deg);
  }

  [name="surfaces"] > [name="surface"].left {
    transform: translateY(var(--translation)) translateX(var(--cube-length-neg)) rotateY(90deg);
  }

  [name="surfaces"] > [name="surface"].top {
    transform: translateX(var(--translation)) translateY(var(--cube-length-neg)) rotateX(90deg);
  }

  [name="surfaces"] > [name="surface"].bottom {
    transform: translateX(var(--translation)) rotateX(90deg);
  }

  [name="surfaces"] > [name="surface"] > [xml="image"] {
    object-fit: contain;
    max-width: 80%;
    max-height: 80%;
  }

  @keyframes rotate {
    0% {
      transform: rotate3d(0, 0, 0, 0);
    }
    100% {
      transform: rotate3d(0, 1, 0, 360deg);
      ;
    }
  }

  @media (min-width: 992px) {
    :root {
      --cube-length: 28vw;
      --cube-length-neg: -28vw;
      --translation: -14vw;
      --translation-pos: 14vw;
    }
  }
`;

export const cube = async () => {
  const schema = { markup, styles };
  return $riu(schema);
};

