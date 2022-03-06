import React from "react";
import BodyCard from "./BodyCard";
import pix from "./1.jpg";
import pix1 from "./3.jpg";

const USeBodyCard = () => {
  const myPix =
    "https://firebasestorage.googleapis.com/v0/b/tech-women-nigeria.appspot.com/o/TechWoman%2FIMG-20220218-WA0040.jpg?alt=media&token=74e5c0ce-7461-49c9-91bb-2e0920fa04db";
  return (
    <div>
      <BodyCard
        title="We Won! TechWoman Nigeria Team."
        subTitle="TechWomen Alumni Association is a fellowship of Women who are recipients of the TechWomen Award from the U.S. Department of State’s Bureau of Educational and Cultural Affairs."
        pix={myPix}
      />

      <BodyCard
        rr
        title="We Won! TechWoman Nigeria Team."
        subTitle="TechWomen Alumni Association is a fellowship of Women who are recipients of the TechWomen Award from the U.S. Department of State’s Bureau of Educational and Cultural Affairs."
        pix={pix1}
      />
    </div>
  );
};

export default USeBodyCard;
