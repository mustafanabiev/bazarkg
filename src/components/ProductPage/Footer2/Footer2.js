import React from 'react';
import './Footer2.css'


const Footer2 = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_info">
                    <ul className="footer_block">
                        <li><h3>О нас</h3></li>
                        <li><a href="">О канпании</a></li>
                        <li><a href="">Наши магазины</a></li>
                        <li><a href="">Возврат товара</a></li>
                    </ul>
                    <ul className="footer_block">
                        <li><h3>Как заказать</h3></li>
                        <li><a href="">Как сделать заказ </a></li>
                        <li><a href="">Доставка </a></li>
                        <li><a href="">Отправка в регионы</a></li>
                    </ul>
                    <ul className="footer_block">
                        <li><h3>Контакты</h3></li>
                        <li>
                            Звоните:<br/>
                            с 9 : 00 до 21 : 00
                        </li>
                        <li><a href="telto:+996774522002">+996 774 52 20 02</a></li>
                        <li><a href="telto:+996507158857">+996 507 15 88 57</a></li>
                        <li><a href="mailto:">email</a></li>
                    </ul>
                    <ul className="footer_block">
                        <li><h3>Мы в соцсетях</h3></li>
                        <li><a href="#">Вконтакте</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Одноклассники</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">WhatsApp</a></li>
                    </ul>
                    <ul className="footer_block">
                        <li><h3>Принимаем к оплату</h3></li>
                        <div className="footer_payments">
                            <img src="img/image 29.svg" alt=""/>
                            <img src="img/image 30.svg" alt=""/>
                            <img src="img/image 32.svg" alt=""/>
                        </div>
                    </ul>
                </div>
            </div>
            <p><img src="img/c.svg" alt=""/>Все права защищены.</p>
        </footer>
    );
}

export default Footer2;