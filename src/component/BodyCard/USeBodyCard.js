import React from "react";
import BodyCard from "./BodyCard";
import pix from "./1.jpg";
import pix1 from "./3.jpg";

const USeBodyCard = () => {
  return (
    <div>
      <BodyCard
        title="We Won! TechWoman Nigeria Team."
        subTitle="TechWomen Alumni Association is a fellowship of Women who are recipients of the TechWomen Award from the U.S. Department of State’s Bureau of Educational and Cultural Affairs."
        pix={pix}
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
