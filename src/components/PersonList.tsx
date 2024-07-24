//array prop
type PersonList = {
  nameList: {
    first: string;
    last: string;
  }[];
};

const PersonList = (prop: PersonList) => {
  return (
    <div>
      {prop.nameList.map((names) => (
        <h4 key={names.first}>
          {names.first} {names.last}
        </h4>
      ))}
    </div>
  );
};
export default PersonList;
