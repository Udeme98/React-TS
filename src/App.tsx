import Greeting from "./components/Greeting";

const App = () => {
  return (
    <div>
      <Greeting name="Udeme" age={9} isLoggedIn={true} />
    </div>
  );
};
export default App;
