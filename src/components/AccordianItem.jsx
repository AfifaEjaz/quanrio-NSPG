import { useState } from "react";

const AccordianItem = ({ item }) => {

  console.log(item);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border border-gray-300 rounded-lg mb-4 p-[16px]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left font-medium flex justify-between"
        >
          {item.title}
          <span>{open ? "-" : "+"}</span>
        </button>
        {open && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[24px] mt-3">
            {item.content.map((val, key) => (
              <div key={key} className="p-[20px] rounded bg-[#f3f9fc]">
                <p className="font-creato-medium">{val.code}</p>
                <p>{val.name}</p>
                <img src={val.image} alt="" />
                <p className="font-inter"> {val.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AccordianItem;
