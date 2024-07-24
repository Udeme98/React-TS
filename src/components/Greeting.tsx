type GreetingProp = {
  name: string;
  age?: number; // Optional props
  isLoggedIn: boolean;
};

const Greeting = (prop: GreetingProp) => {
  return (
    <div>
      {prop.isLoggedIn ? (
        <h2>
          Hello my name is {prop.name}, I am {prop.age} years!
        </h2>
      ) : (
        <h2>Hello Guest</h2>
      )}
    </div>
  );
};
export default Greeting;
