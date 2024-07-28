import Greeting from "../Greeting";

const CustomComponent = (props: React.ComponentProps<typeof Greeting>) => {
  return <div>CustomComponent {props.age}</div>;
};
export default CustomComponent;
