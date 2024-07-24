import Greeting from "./components/Greeting";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

const App = () => {
  const personName = {
    firstName: "Udeme",
    lastName: "Sam",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Lewis",
      last: "Green",
    },
  ];

  return (
    <div>
      <Greeting name="Udeme" age={9} isLoggedIn={true} />
      <Person person={personName} />
      <PersonList nameList={nameList} />
    </div>
  );
};
export default App;
