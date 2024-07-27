import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Box from "./components/context/Box";
import ThemeContext from "./components/context/ThemeContext";
import User from "./components/context/User";
import UserContextProvider from "./components/context/UserContextProvider";

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
      <Input value="" handleChange={(event) => console.log(event)} />

      <ThemeContext>
        <Box />
      </ThemeContext>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
};
export default App;
