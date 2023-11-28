import award from "../../../assess/images/awards.png";
import trip1 from "../../../assess/images/trip-1.jpg";
import trip2 from "../../../assess/images/trip-2.jpg";
import trip3 from "../../../assess/images/trip-3.jpg";
import trip4 from "../../../assess/images/trip-4.jpg";
import trip5 from "../../../assess/images/trip-5.jpg";
import trip6 from "../../../assess/images/trip-6.jpg";
import "./Footer.scss";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__wrap">
                        <div className="footer__awards">
                            <h2 className="footer__awards-title">
                                Our Awards
                            </h2>
                            <p className="footer__awards-desc">
                                London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.
                            </p>
                            <p className="footer__awards-image">
                                <img src={award} alt="award" />
                            </p>
                        </div>

                        <div className="footer__contact">
                            <div className="footer__contact-title">
                                Contact Info
                            </div>
                            <div className="footer__contact-box">
                                <i className="footer__contact-box-icon fa-solid fa-mobile-screen-button"></i> 
                                <span className="footer__contact-box-text">1-567-124-44227</span>
                            </div>
                            <div className="footer__contact-box">
                                <i className="footer__contact-box-icon fa-solid fa-location-dot"></i> 
                                <span className="footer__contact-box-text">184 Main Street East Perl Habour 8007</span>
                            </div>
                            <div className="footer__contact-box">
                                <i className="footer__contact-box-icon fa-solid fa-clock"></i>
                                <span className="footer__contact-box-text">Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
                            </div>

                            <div className="footer__contact-wrap">
                                <a href="/" className="footer__contact-item footer__facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="/" className="footer__contact-item footer__twitter">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="/" className="footer__contact-item footer__youtube">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a href="/" className="footer__contact-item footer__pinterest">
                                    <i className="fa-brands fa-pinterest"></i>
                                </a>
                                <a href="/" className="footer__contact-item footer__instagram">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                            </div>
                            
                        </div>
                        <div className="footer__trips">
                            <div className="footer__trips-title">
                                Recent Trips
                            </div>
                            <div className="footer__trips-row">
                                <a href="/" className="footer__trips-image">
                                    <img src={trip1} alt="Trip 1" />
                                </a>
                                <a href="/" className="footer__trips-image">
                                    <img src={trip2} alt="Trip 2" />
                                </a>
                                <a href="/" className="footer__trips-image">
                                    <img src={trip3} alt="Trip 3" />
                                </a>
                            </div>
                            <div className="footer__trips-row">
                                <a href="/" className="footer__trips-image">
                                    <img src={trip4} alt="Trip 4" />
                                </a>
                                <a href="/" className="footer__trips-image">
                                    <img src={trip5} alt="Trip 5" />
                                </a>
                                <a href="/" className="footer__trips-image">
                                    <img src={trip6} alt="Trip 6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="footer__bottom-content">
                            <div className="footer__coppyRight">
                                &copy; Copyright Grand Tour Theme Demo - Theme by ThemeGoods
                            </div>
                            <div className="footer__list">
                                <li className="footer__list-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="/">Tours</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="/">Blog</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="/">Purchase Theme</a>
                                </li>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
               
            </div>
        </>
    )
}
export default Footer