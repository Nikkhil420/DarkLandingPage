import { FunctionComponent } from "react";
import NavBarDesktop from "../components/Header/NavBar/NavBarDesktop";

import styles from "./Desktop.module.css";
import FrameComponent3 from "../components/Frame3/FrameComponent3";
import Header from "../components/Header/Header";
import FrameComponent4 from "../components/Frame4/FrameComponent4";
import Frame5Component from "../components/Frame5/Frame5Component";
import Frame6Component from "../components/Frame6/Frame6Component";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs/ContactUs";

const Desktop: FunctionComponent = () => {
  return (
    <>
    <div className={styles.Desktop}>

    <Header/>
    <FrameComponent3/>
    <FrameComponent4/>
    <Frame5Component/>
    <Frame6Component/>
    <FAQ/>
    <ContactUs/>
    <Footer/>
    

    </div>
    
    </>
  );
};

export default Desktop;
