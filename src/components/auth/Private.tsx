import Login from "./Login";
import { ProfileProp } from "./Profile";

type PrivateProp = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProp>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProp) => {
  if (isLoggedIn) {
    return <Component name="Ud" />;
  } else {
    return <Login />;
  }
};
export default Private;
