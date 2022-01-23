import React from 'react';
import '../../App/reset.css'
import './MainPage.css'
import '../../Montserrat/stylesheet.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "./components/Main/Main";


const MainPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default MainPage;