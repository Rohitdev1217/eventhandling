import { useState } from "react";

function Filter() {
  const [val, setVal] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="p-5">
      {val.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        className="bg-blue-500 text-white p-2 cursor-pointer rounded"
        onClick={() =>
          setVal(() => {
            return val.filter((item, index) => index != val.length - 1);
          })
        }
      >
        click
      </button>
    </div>
  );
}

export default Filter;
