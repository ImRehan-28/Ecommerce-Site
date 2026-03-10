import React from "react";
import MainCarosel from "../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/men_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} SectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Men's Shoes"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Women's Saree"}/>
        <HomeSectionCarosel data={mens_kurta} SectionName={"Women's Dress"}/>
      </div>
    </div>
  );
};

export default HomePage;
