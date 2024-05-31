import { Fragment } from "react";
import OurProgramsContentLayouts from "../../../layouts/OurProgramsContentLayouts";

const ThirdDay = () => {
  return (
    <Fragment>
      <OurProgramsContentLayouts
        src="lindan.jpg"
        time="09.00 AM"
        room="240"
        role="Front-End Development"
        name="Lindan Maulana"
        description="Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
                  fringilla vestibulum. Praesent ullamcorper mauris fermentum
                  turpis scelerisque rutrum eget eget turpis."
      />

      <OurProgramsContentLayouts
        src="reyhan.jpg"
        time="11.00 AM"
        room="250"
        role="Database Management"
        name="Reyhan Setyawan"
        description="Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam
                  fringilla vestibulum. Praesent ullamcorper mauris fermentum
                  turpis scelerisque rutrum eget eget turpis."
      />

      <OurProgramsContentLayouts
        src="adit.jpg"
        time="07.00 AM"
        room="210"
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

export default ThirdDay;
