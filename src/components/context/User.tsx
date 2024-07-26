import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

const User = () => {
  const userContext = useContext(UserContext);

  const handlelogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Ud",
        email: "Udeme@email",
      });
    }
  };

  const handlelogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handlelogin}>Login</button>
      <button onClick={handlelogout}>Logout</button>
      <div>Username is {userContext?.user?.name}</div>
      <div>Username is {userContext?.user?.email}</div>
    </div>
  );
};
export default User;
