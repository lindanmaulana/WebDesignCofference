import { Fragment } from "react";

import OurProgramsContentLayouts from "../../../layouts/OurProgramsContentLayouts";

const SecondDay = () => {
  return (
    <Fragment>
      <OurProgramsContentLayouts
        src="lindan.jpg"
        time="22.00 PM"
        room="280"
        role="Front-End Development"
        name="Lindan Maulana"
        description="Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
                  fringilla vestibulum. Praesent ullamcorper mauris fermentum
                  turpis scelerisque rutrum eget eget turpis."
      />

      <OurProgramsContentLayouts
        src="reyhan.jpg"
        time="19.00 PM"
        room="281"
        role="Database Management"
        name="Reyhan Setyawan"
        description="Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
                  fringilla vestibulum. Praesent ullamcorper mauris fermentum
                  turpis scelerisque rutrum eget eget turpis."
      />

      <OurProgramsContentLayouts
        src="adit.jpg"
        time="20.00 PM"
        room="280"
        role="Profesional UI/UX Design"
        name="Aditya Ramadhan"
        description="Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
                  fringilla vestibulum. Praesent ullamcorper mauris fermentum
                  turpis scelerisque rutrum eget eget turpis."
      />

      <OurProgramsContentLayouts
        src="adit.jpg"
        time="12.00 AM"
        room="220"
        role="Back-End Development"
        name="Rian Prayoga"
        description="Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
                    fringilla vestibulum. Praesent ullamcorper mauris fermentum
                    turpis scelerisque rutrum eget eget turpis."
      />
    </Fragment>
  );
};

export default SecondDay;
