//union type
type StatusProp = {
  status: "loading" | "success" | "error";
};

const Status = (prop: StatusProp) => {
  let message;
  if (prop.status === "loading") {
    message = "Loading...";
  } else if (prop.status === "success") {
    message = "Data Fetched Successfully";
  } else if (prop.status === "error") {
    message = "Error fetching Data";
  }
  return <div>Status - {message}</div>;
};
export default Status;
