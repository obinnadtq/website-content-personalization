import Body from "../src/components/Body";

function UnknownComponent(component) {
  return <div>[unknown component: {component.type}]</div>;
}

export default function resolveRenderer({ type }) {
  if (type == "body") {
    return Body;
  }
  return UnknownComponent;
}