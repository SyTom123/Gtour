import React, { useState } from 'react'
import Header from '../../components/layoutDefault/Header'
import videoNorway from '../../assess/videos/Spectacular Norway - from the air.mp4';
import tokio from "../../assess/images/tokio.jpg"
import seoul from "../../assess/images/seoul.jpg"
import paris from "../../assess/images/paris.jpg"
import london from "../../assess/images/london.jpg"
import bestTrip1 from "../../assess/images/bestTrip1.jpeg"
import bestTrip2 from "../../assess/images/bestTrip2.jpeg"
import bestTrip3 from "../../assess/images/bestTrip3.jpeg"
import mapMarker from "../../assess/images/Map-Marker.png"
import worldwide from "../../assess/images/Worldwide-Location.png"
import airBalloon from "../../assess/images/Hot-Air-Balloon.png"
import './Home.scss';
const Home = () => {
    const [display, setDisplay] = useState("");
    const handleDisplayMoreSearch = () => {
        if(display === "") {
            setDisplay("display");
        }
        else {
            setDisplay("");
        }
    }
    return (
        <>
            <Header />
            
            <div className="search">
                <video width="100%" autoPlay muted loop className='search__video'> 
                    <source src={videoNorway}/>
                </video>
                <div className='search__content'>
                    <div className="container">
                        <h2 className='search__title'>Where do you want to go?</h2>
                        <p className='search__desc'>Trips, experiences, and places. All in one service.</p>
                        <form className='search__form' action=''>
                            <div className='search__wrap'>
                                <div className="search__box">
                                    <input className="search__input" type="text" placeholder='Destination, city'/>
                                    <i className="search__box-icon fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="search__box">
                                    <input className="search__input" type="text" placeholder='Any month'/>
                                    <i className="search__box-icon fa-regular fa-calendar" ></i>
                                </div>
                                <div className="search__box">
                                    <input className="search__input" type="text" placeholder='Sort by Date'/>
                                    <i className="search__box-icon fa-solid fa-arrow-up-a-z"></i>
                                </div>
                                <button className="search__button">
                                    <span className="search__button-text">Search</span>
                                </button>
                            </div>
                            
                            <div className ={"search__wrap-2 " + display}>
                                <select className="search__select search__box" placeholder='All Categories'>
                                    <option value="all">All Categories</option>
                                    <option value="mountain">Mountain</option>
                                    <option value="rural">Rural</option>
                                    <option value="snow">Snow & Ice</option>
                                    <option value="wilflife">WilfLife</option>
                                </select>
                                <select className="search__select search__box" placeholder='Any Destinations'>
                                    <option value="all">Any Destinations</option>
                                    <option value="tokio">Tokio</option>
                                    <option value="seoul">Seoul</option>
                                    <option value="paris">Paris</option>
                                    <option value="london">London</option>
                                    <option value="venice">Venice</option>
                                    <option value="miani">Miami</option>
                                    <option value="rome">Rome</option>
                                    <option value="prague">Prague</option>
                                    <option value="california">California</option>
                                    <option value="kyoto">Kyoto</option>
                                    <option value="hongkong">HongKong</option>
                                    <option value="santorini">Santorini</option>
                                </select>
                                <div className="search__box">
                                    <input className="search__input" type="text" placeholder='Max budge ex. 500'/>
                                    <i className="search__box-icon fa-solid fa-dollar-sign"></i>
                                </div>
                            </div>
                            <div className='search__more' onClick={handleDisplayMoreSearch}>
                                <i className={"search__more-icon-down fa-solid fa-angle-down " + display}></i>
                                <i className={"search__more-icon-up fa-solid fa-angle-up " + display}></i>
                                <p className='search__more-text'>Advanced Search</p>
                            </div>

                        </form>
                    </div>
                   
                </div>
            </div>

            <div className="popularDes">
                <div className="container">
                    <h2 className="boxHead__title">
                        Popular Destinations
                    </h2>
                    <p className="boxHead__desc">
                        World's best tourist destinations
                    </p>
                    <div className="popularDes__wrap">
                        <a className="popularDes__box" href='/'>
                            <div className="popularDes__image">
                                <img src={tokio} alt="Tokio" />
                            </div>
                            <p className="popularDes__name">Tokyo</p>
                        </a>
                        <a className="popularDes__box" href='/'>
                            <div className="popularDes__image">
                                <img src={seoul} alt="seoul" />
                            </div>
                            <p className="popularDes__name">Seoul</p>
                        </a>
                        <a className="popularDes__box" href='/'>
                            <div className="popularDes__image">
                                <img src={paris} alt="paris" />
                            </div>
                            <p className="popularDes__name">Paris</p>
                        </a>
                        <a className="popularDes__box" href='/'>
                            <div className="popularDes__image">
                                <img src={london} alt="london" />
                            </div>
                            <p className="popularDes__name">London</p>
                        </a>
                    </div>

                </div>
            </div>

            <div className='bestTrip'>
                <div className="container">
                    <h2 className="boxHead__title">
                        Best Value Trips
                    </h2>
                    <p className="boxHead__desc">
                        Best offers trips from us
                    </p>

                    <div className="bestTrip__wrap">
                        <div className="bestTrip__box">
                            <div className="bestTrip__image">
                                <img src={bestTrip1} alt="French Autumn" />
                                <div className="bestTrip__price">
                                    <div className="bestTrip__newPrice">
                                        $ 5,000
                                    </div>
                                </div>
                            </div>
                            <div className="bestTrip__content">
                                <div className= " bestTrip__title">
                                    French Autumn
                                </div>
                                <div className= " bestTrip__desc">
                                    City Tour, Urban
                                </div>
                                <div className="bestTrip__more">
                                    <div className='bestTrip__stars'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className='bestTrip__reviews'>
                                        4 reviews
                                    </div>
                                    <div className='bestTrip__time'>
                                        <i class="fa-regular fa-clock"></i>
                                        <span>5 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bestTrip__box">
                            <div className="bestTrip__image">
                                <img src={bestTrip2} alt="Grand Switzerland" />
                                <div className="bestTrip__price">
                                    <div className="bestTrip__newPrice">
                                        $ 6,000
                                    </div>
                                </div>
                            </div>
                            <div className="bestTrip__content">
                                <div className= " bestTrip__title">
                                    Grand Switzerland
                                </div>
                                <div className= " bestTrip__desc">
                                    Shoping, Mountain, Snow $ Ice
                                </div>
                                <div className="bestTrip__more">
                                    <div className='bestTrip__stars'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className='bestTrip__reviews'>
                                        4 reviews
                                    </div>
                                    <div className='bestTrip__time'>
                                        <i class="fa-regular fa-clock"></i>
                                        <span>6 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bestTrip__box">
                            <div className="bestTrip__image">
                                <img src={bestTrip3} alt="Discover Japan" />
                                <div className="bestTrip__price">
                                    <div className="bestTrip__oldPrice">
                                        $ 3,000
                                    </div>
                                    <div className="bestTrip__newPrice">
                                        $ 2,500
                                    </div>
                                </div>
                            </div>
                            <div className="bestTrip__content">
                                <div className= " bestTrip__title">
                                    Discover Japan
                                </div>
                                <div className= " bestTrip__desc">
                                    City Tours, Iconic
                                </div>
                                <div className="bestTrip__more">
                                    <div className='bestTrip__stars'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className='bestTrip__reviews'>
                                        4 reviews
                                    </div>
                                    <div className='bestTrip__time'>
                                        <i class="fa-regular fa-clock"></i>
                                        <span>5 days</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bestTrip__sale">
                                <span>
                                    Sale
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="whyChoose">
                <div className="container">
                    <h2 className="boxHead__title">
                        Why Choose Us
                    </h2>
                    <p className="boxHead__desc">
                        Here are reasons you should plan trip with us
                    </p>
                    <div className="whyChoose__wrap">
                        <div className="whyChoose__box">
                            <div className="whyChoose__image">
                                <img src={mapMarker} alt="Map Marker" />
                            </div>
                            <h2 className="whyChoose__title">
                                Handpicked Hotels
                            </h2>
                            <p className="whyChoose__desc">
                                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                        <div className="whyChoose__box">
                            <div className="whyChoose__image">
                                <img src={worldwide} alt="worldwide" />
                            </div>
                            <h2 className="whyChoose__title">
                                World Class Service
                            </h2>
                            <p className="whyChoose__desc">
                                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                        <div className="whyChoose__box">
                            <div className="whyChoose__image">
                                <img src={airBalloon} alt="worldwide" />
                            </div>
                            <h2 className="whyChoose__title">
                                Best Price Guarantee
                            </h2>
                            <p className="whyChoose__desc">
                                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home