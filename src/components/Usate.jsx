import { useState } from "react";

const Usate = () => {
  const [banned, isBanned] = useState({ name: "Rohit", isBanned: false });
  return (
    <div className="py-2 px-3">
      <h1>name: Rohit</h1>
      <h2>isbanned: {banned.isBanned.toString()}</h2>
      <button
        onClick={() => isBanned({ ...banned, isBanned: !banned.isBanned })}
        className={`px-3 py-2 ${banned.isBanned ? "bg-blue-500" : "bg-red-500"} rounded-md text-white  text-xs`}
      >
        change
      </button>
    </div>
  );
};

export default Usate;
