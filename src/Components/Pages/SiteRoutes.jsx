import { Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import Productss from "./Productss";
import Home from "./Productss";
import ContactPage from "./ContactPage";
import "./SiteRoutes.css";

import PageNotFound from "./PageNotFound";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/product" element={<Productss />} />
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default SiteRoutes;
