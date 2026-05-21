import { useState } from "react";

const Ban = () => {
  const [banned, setBanned] = useState(false);
  return (
    <div className="py-2 px-3 ">
      <h1>{banned.toString()}</h1>
      <button
        onClick={() => setBanned(banned ? false : true)}
        className="bg-blue-400 px-3 py-2 rounded  text-sm text-white"
      >
        click
      </button>
    </div>
  );
};

export default Ban;
