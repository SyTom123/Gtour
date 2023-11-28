import React, { useState } from 'react'
import Header from '../../components/layoutDefault/Header'
import videoNorway from '../../assess/videos/Spectacular Norway - from the air.mp4';
import tokio from "../../assess/images/tokio.jpg"
import seoul from "../../assess/images/seoul.jpg"
import paris from "../../assess/images/paris.jpg"
import london from "../../assess/images/london.jpg"
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

                </div>
            </div>

        </>

    )
}

export default Home