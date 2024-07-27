import { useEffect, useRef } from "react";

const DomRef = () => {
  const InputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    InputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={InputRef} />
    </div>
  );
};
export default DomRef;
