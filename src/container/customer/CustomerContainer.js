import React from "react";
import SearchProperty from "../../components/viewer/SearchProperty";
import PropertyContainer from "../PropertyContainer";

function CustomerContainer() {
  return (
    <div>
      <div>
        <SearchProperty />
      </div>

      <div>
        <PropertyContainer />
      </div>
    </div>
  );
}

export default CustomerContainer;

// import React from "react";
// import FeatureSection from "../../components/FeatureSection";
// import SearchProperty from "../../components/viewer/SearchProperty";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// export default function CustomerComponent() {
//   return (
//     <React.Fragment>
//       <div>
//         <Header />
//       </div>
//       <div>
//         <SearchProperty />
//       </div>

//       <div>
//         <FeatureSection />
//       </div>

//     </React.Fragment>
//   );
// }
