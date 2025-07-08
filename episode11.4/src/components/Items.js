import { useContext, useState } from "react";
import { store } from "../App";

const Items = () => {
  const [infor, setInfor] = useContext(store);
  const [inp, setInp] = useState("");
  function HandleClick(e) {
    e.preventDefault();
    setInfor([...infor, { brandname: inp }]);
  }
  return (
    <div>
      <ul className=" flex flex-col justify-center items-center gap-1 bg-amber-500 w-10/12 mt-5 mx-10 my-5 py-20 font-extrabold">
        {infor.map((item, index) => (
          <li key={index}> {item.brandname} </li>
        ))}
      </ul>
      <div className=" flex justify-center align-middle ">
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          className="border px-3 py-1 rounded"
        />
        <button
          onClick={HandleClick}
          className="ml-2 bg-blue-600 text-white px-4 py-1 rounded"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Items;
