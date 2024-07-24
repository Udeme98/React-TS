import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      <Greeting name="Udeme" age={12} isLoggedIn={true} />
      <Person person={personName} />
      <PersonList nameList={nameList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar Goes to the best!</Heading>
      </Oscar>

      <Button handleClick={(event, id) => console.log("Clicked", event, id)} />
      <br />
      <Input value="y" handleChange={(event) => console.log(event)} />
    </div>
  );
};
export default App;
