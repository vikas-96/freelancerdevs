import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { PublicLayout, FrontLayout } from "./Layout";
const Home = React.lazy(() => import("../Pages/Front/Home"));
const Aboutus = React.lazy(() => import("../Pages/Front/Aboutus"));
const Team = React.lazy(() => import("../Pages/Front/Team"));
const Service = React.lazy(() => import("../Pages/Front/Service"));
const Project = React.lazy(() => import("../Pages/Front/Project"));
const Contact = React.lazy(() => import("../Pages/Front/Contact"));
const PrivacyPolicy = React.lazy(() => import("../Pages/Front/PrivacyPolicy"));
const Contactus_table = React.lazy(() =>
  import("../Pages/Front/Contactus_table")
);
const NotFound = React.lazy(() => import("../Pages/Error/NotFound"));

const Root = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <FrontLayout path="/" exact component={Home} />
          <FrontLayout path="/about" exact component={Aboutus} />
          <FrontLayout path="/team" exact component={Team} />
          <FrontLayout path="/service" exact component={Service} />
          <FrontLayout path="/project" exact component={Project} />
          <FrontLayout path="/contact" exact component={Contact} />
          <FrontLayout path="/privacy_policy" exact component={PrivacyPolicy} />
          <FrontLayout
            path="/contactus_table"
            exact
            component={Contactus_table}
          />

          {/* <PrivateLayout
            path="/user/dashboard"
            exact
            component={dashboard}
            authenticated={true}
          /> */}

          <PublicLayout component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default Root;
