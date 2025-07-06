import React, { useState } from "react";
import AccordianItem from "../components/AccordianItem";
import packages from "../assets/images/packages.png";
import HeaderBar from "../components/HeaderBar";

const OptionTiles = () => {
  const originalOptionTiles = [
    { title: "Option plan titles",
      content: [
        { code: "OPT-100", name: "Platinum Option Package", price: 200, image: packages, description: "Platinum option is the most comprehensive solution, this option is designed to increase reliability, comfort, safety and efficiency. Platinum Option includes:1. Lifetime Value Service Club membership, this entitles you to save with Value pricing, never pay a service call fee, and receive priority service.2. Include Plumbing system safety inspection with report.3. Includes the highest quality parts4. Includes 5 all-inclusive Parts and labor warranty. 0150 -- 0000" },
        { code: "OPT-200",name: "Gold Option Package",price: 300,image: packages,description:"Platinum option is the most comprehensive solution, this option is designed to increase reliability, comfort, safety and efficiency. Platinum Option includes:1. Lifetime Value Service Club membership, this entitles you to save with Value pricing, never pay a service call fee, and receive priority service.2. Include Plumbing system safety inspection with report.3. Includes the highest quality parts4. Includes 5 all-inclusive Parts and labor warranty. 0150 -- 0000"},
      ]},
    { title: "Option title basic",
      content: [
        { code: "OPT-100", name: "Platinum Option Package", price: 200, description: "Platinum option is the most comprehensive solution, this option is designed to increase reliability, comfort, safety and efficiency. Platinum Option includes:1. Lifetime Value Service Club membership, this entitles you to save with Value pricing, never pay a service call fee, and receive priority service.2. Include Plumbing system safety inspection with report.3. Includes the highest quality parts4. Includes 5 all-inclusive Parts and labor warranty. 0150 -- 0000"},
        { code: "101", name: "Heading 2", price: 300, description: "Platinum option is the most comprehensive solution, this option is designed to increase reliability, comfort, safety and efficiency. Platinum Option includes:1. Lifetime Value Service Club membership, this entitles you to save with Value pricing, never pay a service call fee, and receive priority service.2. Include Plumbing system safety inspection with report.3. Includes the highest quality parts4. Includes 5 all-inclusive Parts and labor warranty. 0150 -- 0000"},
      ]},
  ];

  const [optionTiles, setOptionTiles] = useState(originalOptionTiles)



  return (
    <>
    <HeaderBar data={optionTiles} setData={setOptionTiles} originalData={originalOptionTiles}/>
      <div className="p-[24px]">
        {optionTiles.map((item, index) => (
          <AccordianItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default OptionTiles;
