import { useState } from "react";

const Card = () => {
  const data = [
    {
      name: "khat - TreeWalker",
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, accusamus.",
    },
    {
      name: "Radharani",
      dsc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    },
  ];
  const [download, Setdownload] = useState("Download");
  // const handleClick = () => {
  //   Setdownload("Downloading...");
  //   setTimeout(() => {
  //     Setdownload("Downloaded");
  //   }, 2000);
  // };
  const handleClick = () => {
    Setdownload("Downloading...");
    setTimeout(() => {
      Setdownload("Downloaded");
    }, 2000);
  };

  return (
    <div className="bg-zinc-300 w-full h-screen flex flex-col gap-5  items-center justify-center ">
      {data.map((i, index) => (
        <div key={index} className="px-3 py-2 rounded w-90 h-fit bg-zinc-50">
          <h1 className="text-xl mt-2">{i.name}</h1>
          <p className="text-sm mt-2">{i.dsc}</p>
          <button
            onClick={handleClick}
            className="bg-blue-400 mt-3  rounded-md px-2 font-semibold text-white py-1 text-xs"
          >
            {download}
          </button>
        </div>  
      ))}
    </div>
  );
};

export default Card;
