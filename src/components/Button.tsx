type ButtonProp = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProp) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click Me!</button>
  );
};
export default Button;
