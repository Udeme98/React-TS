type ProfileProp = {
  name: string;
};

const Profile = ({ name }: ProfileProp) => {
  return <div>Private Profile Component. Name is {name}</div>;
};
export default Profile;
