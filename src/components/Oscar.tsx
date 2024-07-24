//When the child is another TypeScript component
type OscarProp = {
  children: React.ReactNode;
};

const Oscar = (prop: OscarProp) => {
  return <div>{prop.children}</div>;
};
export default Oscar;
