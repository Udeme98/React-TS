//object prop
type PersonObj = {
  person: {
    firstName: string;
    lastName: string;
  };
};

const Person = (prop: PersonObj) => {
  return (
    <div>
      {prop.person.firstName} {prop.person.lastName}
    </div>
  );
};
export default Person;
