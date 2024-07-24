type HeadingProp = {
  children: string;
};

const Heading = (prop: HeadingProp) => {
  return <div>{prop.children}</div>;
};
export default Heading;
