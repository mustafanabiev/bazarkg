import React from 'react';
import './HeaderPage.css'

const HeaderPage = () => {
    return (
        <header className="header">
            <div className="header_top">
                <div className="container">
                    <ul className="header_lang">
                        <li><a href="#">Русский</a></li>
                        <li>
                            <a href="#"><img src="img-MainPage/room_black_24dp 1.svg" alt=""/>Ош</a>
                        </li>
                        <li><a href="#">Бесплатная доставка</a></li>
                        <li><a href="#">Продавцам</a></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <nav className="header_nav">
                    <div className="logo">
                        <img src="img-MainPage/logo.svg" alt=""/>
                        <h2>Online <span>Bazar</span></h2>
                    </div>
                    <ul className="header_menu">
                        <li className="active"><a href="#">Главная</a></li>
                        <li><a href="#">Акция</a></li>
                        <li><a href="#">Бренд</a></li>
                        <li><a href="#">Магазины</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <ul className="header_icons">
                        <li>
                            <a href="#"><img src="img-MainPage/Vector (2).svg" alt=""/></a>
                        </li>
                        <li>
                            <a href="#"><img src="img-MainPage/Vector (1).svg" alt=""/></a>
                        </li>
                        <li>
                            <a href="#"><img src="img-MainPage/Vector.svg" alt=""/></a>
                        </li>
                        <li>
                            <a href="#"><img src="img-MainPage/burger.svg" alt=""/></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderPage;