import { useState } from "react";
import logo from "../../../assess/images/logo2.png";
import logo1 from "../../../assess/images/logo1.png";
import "./Header.scss";
import { useEffect } from "react";
const Header = () => {

    const [sticky, setSticky] = useState("");

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 800 ? "sticky" : "";
        setSticky(stickyClass);
      };

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
      }, []);
    return (
        <div className={"layout_header " + sticky}>
            <div className="container">
                <div className={"header " + sticky}>
                    <div className="header__image">
                        <img src={logo1} className={"header__image-logo-1 "+ sticky} alt="Logo" />
                        <img src={logo} className={"header__image-logo-2 "+ sticky} alt="Logo" />
                    </div>
                    <div className="header__right">
                        <ul className="header__menu">
                            <li className="header__menu-item">
                                <a className="header__menu-item-link" href="/#">
                                    <p className="header__menu-item-text">Home</p>
                                    <i className="fa-solid fa-angle-down header__menu-item-icon"></i>
                                </a>
                                <ul className="header__submenu">
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Home 1 - Background Image
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Home 2 - Youtube Video
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Home 3 - Google Inspired
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Home 4 - Travel Site
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-item-link" href="/#">
                                    <p className="header__menu-item-text">Tours</p>
                                    <i className="fa-solid fa-angle-down header__menu-item-icon"></i>
                                </a>
                                <ul className="header__submenu">
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Tour Classic Fullwidth</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>2 Columns</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>3 Columns</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>4 Columns</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Tour Classic Sibar</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Right Sidebars</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Left Sidebar</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Tour Grid Fullwidth</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>2 Columns</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>3 Columns</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>4 Columns</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Tour Grid Sibar</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Right Sidebars</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Left Sidebar</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Tour List Sibar</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Right Sidebars</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Left Sidebar</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Tour Header Type</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Feature Images</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Video</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Tour Category</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Rural</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Snow $ ice</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Wildlife</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Mountain</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-item-link" href="/#">
                                    <p className="header__menu-item-text">Booking</p>
                                    <i className="fa-solid fa-angle-down header__menu-item-icon"></i>
                                </a>
                                <ul className="header__submenu">
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Online Payment for Booking</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Variable Tour Price</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Simple Tour Price</p>
                                                </a>
                                            </li>
                                           
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Customer booking Form</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Booking Form + Sub Tour Date</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                <p>Booking Form + Customer Date</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Tour Duration</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Single Day Tour</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Multiple Day Tour</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Customer Booking URL for Affiliate Tour</p>
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Customer Booking URL for HTML & ShortCode</p>
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Header Option</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Standard Background Header</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Video Background Header</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            <p>Layout Option</p>
                                            <i className="fa-solid fa-angle-right header__submenu-item-link-icon"></i>
                                        </a>
                                        <ul className="header__sub-2menu">
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>With Sidebar</p>
                                                </a>
                                            </li>
                                            <li className="header__sub-2menu-item">
                                                <a href="/#" className="header__sub-2menu-item-link">
                                                    <p>Fullwidth</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-item-link" href="/#">
                                    <p className="header__menu-item-text">Destinations</p>
                                    <i className="fa-solid fa-angle-down header__menu-item-icon"></i>
                                </a>
                                <ul className="header__submenu">
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Destination Fullwidth
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Destination + Video Header
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Destination Right Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Destination Left Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Single Destination
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Single Destination + Video
                                        </a>
                                    </li>
                                </ul>
                               
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-item-link" href="/#">
                                    <p className="header__menu-item-text">Pages</p>
                                    <i className="fa-solid fa-angle-down header__menu-item-icon"></i>
                                </a>
                                <ul className="header__submenu">
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            About us
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Contact us
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            FAQs
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Gallery
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Page Fullwidth
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Page + Video Background Header
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Page Right Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Page Left Sibar
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-item-link" href="/#">
                                    <p className="header__menu-item-text">Blog</p>
                                    <i className="fa-solid fa-angle-down header__menu-item-icon"></i>
                                    
                                </a>
                                <ul className="header__submenu">
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Right Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Left Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Fullwidth
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Grid Right Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Page Fullwidth
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Grid Left Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Grid Fullwidth
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Full + Grid Right Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Full + Grid Left Sibar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Blog Grid Full Width
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-item-link" href="/#">
                                    <p className="header__menu-item-text">Shortcodes</p>
                                    <i className="fa-solid fa-angle-down header__menu-item-icon"></i>
                                </a>
                                <ul className="header__submenu">
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Accordion + Toggles
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Alert Boxes
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Animated Content
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Button & Social Icons
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Columns
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Google Maps
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Image Frame & Animation
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Image Teaser
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Price Tables
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Tabs
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__menu-item">
                                <a className="header__menu-item-link" href="/#">
                                    <p className="header__menu-item-text">Shop</p>
                                    <i className="fa-solid fa-angle-down header__menu-item-icon"></i>
                                </a>
                                <ul className="header__submenu">
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Shop Fullwidth
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Shop Sidebar
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Single Product Fullwidth
                                        </a>
                                    </li>
                                    <li className="header__submenu-item">
                                        <a href="/#" className="header__submenu-item-link">
                                            Single Product width Sibar
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="header__sibar">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="header__cart">
                            <a href="/#" className="header__cart-link">
                                <i className="fa-solid fa-cart-shopping header__cart-icon"></i>
                                <div className="header__cart-number">
                                    0
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Header