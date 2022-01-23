import React from 'react';
import './ProductPage.css';
import '../../App/reset.css';
import '../../Montserrat/stylesheet.css'
import HeaderPage from "./Header2/HeaderPage";
import Footer2 from "./Footer2/Footer2";

const ProductPage = () => {
    return (
        <div>
            <HeaderPage/>
            <div className="container">
                <h5 style={{paddingLeft: '20px', fontSize: '14px', fontWeight: '400'}}>Мужчины &rArr;
                    <a style={{color: '#3349E3'}} href="#"> Футболка</a>
                </h5>
                <div className="blog">
                    <div className="blog_product">
                        <img className="blog_img" src="./img/image%2021.svg" alt=""/>
                        <div className="blog_product_info">
                            <div className="blog_product_price">
                                <h2 className="blog_product_oldprice">12 000 c</h2>
                                <h2 className="blog_product_newprice">9 600c</h2>
                            </div>
                        </div>
                        <div className="blog_product_info">
                            <h3>Бренд:</h3>
                            <p className="blog_product_brand">HARMONT</p>
                        </div>
                        <div className="blog_product_info">
                            <h3>Описания</h3>
                            <p>Футболка мужская с ярким принтом светящимся в темноте. Футболка сшита из качественного
                                турецкого трикотажа с добавлением в состав хлопка и лайкры(ткань эластичная),
                                используемый
                                материал не теряет форму после многократных стирок, мягкий и приятный к телу,
                                устойчив.</p>
                        </div>
                    </div>
                    <div className="blog_size">
                        <div className="blog_item">
                            <h3>Варианты</h3>
                            <div className="blog_pagination">
                                <svg width="50px"
                                     height="50px"
                                     viewBox="0 0 20 20" className="bi bi-arrow-left"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                    <path fill-rule="evenodd"
                                          d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                <div className="blog_size_pagination"></div>
                                <div className="blog_size_pagination"></div>
                                <div className="blog_size_pagination"></div>
                                <div className="blog_size_pagination"></div>
                                <div className="blog_size_pagination"></div>
                                <svg width="50px" height="50px" viewBox="0 0 20 20" className="bi bi-arrow-right"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                                    <path fill-rule="evenodd"
                                          d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="blog_item">
                            <h3>Цветы: <p>чёрный</p></h3>
                            <div className="blog_pagination">
                                <svg width="50px" height="50px" viewBox="0 0 20 20" className="bi bi-arrow-left"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                    <path fill-rule="evenodd"
                                          d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                <div className="blog_size_pagination"></div>
                                <div className="blog_size_pagination"></div>
                                <div className="blog_size_pagination"></div>
                                <div className="blog_size_pagination"></div>
                                <div className="blog_size_pagination"></div>
                                <svg width="50px" height="50px" viewBox="0 0 20 20" className="bi bi-arrow-right"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                                    <path fill-rule="evenodd"
                                          d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                                </svg>
                            </div>
                        </div>

                        <div className="blog_item">
                            <h3>Таблица размеров</h3>
                            <div className="blog_size_product">
                                <div className="blog_size_product_select">
                                    <p>S</p>
                                </div>
                                <div className="blog_size_product_select">
                                    <p>M</p>
                                </div>
                                <div className="blog_size_product_select">
                                    <p>L</p>
                                </div>
                                <div className="blog_size_product_select">
                                    <p>XL</p>
                                </div>
                                <div className="blog_size_product_select">
                                    <p>2XL</p>
                                </div>
                                <div className="blog_size_product_select">
                                    <p>3XL</p>
                                </div>
                                <div className="blog_size_product_select">
                                    <p>4XL</p>
                                </div>
                                <div className="blog_size_product_select">
                                    <p>5XL</p>
                                </div>
                            </div>

                        </div>

                        <div className="blog_item">
                            <h3>Состав</h3>
                            <p>хлопок 80%, полиестер 20%</p>
                        </div>

                        <div className="blog_item">
                            <div className="blog_size_order">
                                <button className="blog_size_btnBasket">Добавить в корзинку</button>
                                <svg style={{marginLeft: '35px', color: 'rgba(222, 31, 31, 0.9)'}}
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="40" height="40" fill="currentColor"
                                     className="bi bi-heart" viewBox="0 0 16 16">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                            </div>
                        </div>

                        <div className="blog_item">
                            <h3>Количество</h3>
                            <div className="blog_size_order">
                                <div className="blog_size_order_count">
                                    <div className="order_count order_count_right"></div>
                                </div>
                                <input placeholder="1" className="blog_size_count" type="text"/>
                                <div className="blog_size_order_count">
                                    <div className="order_count order_count_left"></div>
                                </div>
                                <input className="blog_size_results" placeholder="итоги:" type="number"/>

                            </div>
                        </div>

                        <div className="blog_item">
                            <div className="blog_size_delivery">
                                <img src="img/Group.svg" alt=" "/>
                                <p>Бесплатная доставка ...</p>
                            </div>
                        </div>

                        <div className="blog_item">
                            <div className="blog_size_btnForm">
                                <button className="blog_size_btnBuy">Купить</button>
                            </div>
                        </div>
                    </div>
                    <div className="blog_shop">
                        <div className="blog_shop_info">
                            <p>Магазин:</p>
                            <a href="#">Brand-Mixx</a>
                        </div>
                        <div className="blog_shop_info">
                            <p>Продовец:</p>
                            <a href="#">Азамов Искендер</a>
                        </div>
                        <div className="blog_shop_info">
                            <p>Находится:</p>
                            <a href="#">г. Ош</a>
                        </div>
                        <div className="blog_shop_info">
                            <p>Соцетях:</p>
                            <a href="#">Instagram</a>
                            <a href="#">Telegram</a>
                            <a href="#">Lalafo</a>
                        </div>

                    </div>
                </div>

                <div className="blog_review">
                    <div>
                        <h2>Отзывы <a href="#">57</a></h2>
                    </div>
                    <div>
                        <input placeholder="Написать отзыв"
                               style={{
                                   border: 'none',
                                   borderBottom: '1px solid black',
                                   fontSize: '16px',
                                   width: '616px',
                                   margin: '50px 0px 50px 0px'
                               }}
                               type="text"/>
                    </div>
                    <div className="blog_review_item">
                        <div className="blog_review_item_block">
                            <div className="blog_review_item_inblock">
                                <img src="/img/Ellipse%2040.svg" alt=""/>
                                <p>Аяна</p>
                            </div>
                            <div className="blog_rewiew_item_comment">
                                Эн жакшы !!! ишинерге ийгилик.
                                dllllllllllllllllllll Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Adipisci, cum cupiditate deleniti doloremque eum, expedita facilis id, illum iure minima
                                nobis quos repudiandae totam ullam ut voluptas voluptates. Beatae, provident! Lorem
                                ipsum
                                dolor sit amet, consectetur adipisicing elit. Aliquid amet culpa fuga itaque laborum,
                                minima
                                neque odio officia, perspiciatis quasi totam, voluptates. Amet consequatur itaque
                                libero,
                                magni provident sequi veniam.
                                lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                            </div>
                        </div>
                        <div className="blog_review_item_block">
                            <div className="blog_review_item_inblock">
                                <img src="/img/Ellipse%2040.svg" alt=""/>
                                <p>Аяна</p>
                            </div>
                            <div className="blog_rewiew_item_comment">
                                Эн жакшы !!! ишинерге ийгилик.
                            </div>
                        </div>
                        <div className="blog_review_item_block">
                            <div className="blog_review_item_inblock">
                                <img src="/img/Ellipse%2040.svg" alt=""/>
                                <p>Аяна</p>
                            </div>
                            <div className="blog_rewiew_item_comment">
                                Эн жакшы !!! ишинерге ийгилик.
                            </div>
                        </div>
                        <div className="blog_review_item_block">
                            <div className="blog_review_item_inblock">
                                <img src="/img/Ellipse%2040.svg" alt=""/>
                                <p>Аяна</p>
                            </div>
                            <div className="blog_rewiew_item_comment">
                                Эн жакшы !!! ишинерге
                                ийгилик.
                            </div>
                        </div>
                    </div>
                    <div className="blog_review_seeeverything">
                        <svg width="65px" height="65px" viewBox="0 0 20 20" className="bi bi-arrow-left"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd"
                                  d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg width="65px" height="65px" viewBox="0 0 20 20" className="bi bi-arrow-right"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd"
                                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                        </svg>
                    </div>
                </div>

                <div className="blog_main">
                    <div className="blog_main_product">
                        <h2 className="blog_main_chapter">Футболка</h2>
                        <div className="blog_main_product_blog">

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>
                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="blog_main">
                    <div className="blog_main_product">
                        <h2 className="blog_main_chapter">Джинсы</h2>
                        <div className="blog_main_product_blog">

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>
                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="blog_main">
                    <div className="blog_main_product">
                        <h2 className="blog_main_chapter">Мужской красовка</h2>
                        <div className="blog_main_product_blog">

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>
                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>

                            <div className="blog_main_product_column">
                                <div className="blog_main_product_back"></div>
                                <div className="blog_main_product_info">
                                </div>
                                <div className="blog_main_info">
                                    <p className="blog_main_oldprice">12 000 c</p>
                                    <p className="blog_main_newprice">10 000 c</p>
                                </div>
                                <h3>Футболка</h3>
                                <div className="blog_main_product_brand">Brand-Mixx</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer2/>
        </div>
    );

}

export default ProductPage;