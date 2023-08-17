import React from 'react'; 
import './Comon.css';
import './stylesheet.css'

const Header = () => {
    return (
        <section className="section1">
            <header>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="logo">
                            <img src="./img/logo.webp" alt="" />
                        </div>
                        <div className="menu">
                            <ul className="row">
                                <li>
                                    <a href="#">HOME</a>
                                </li>
                                <li>
                                    <a href="#">FEATURES</a>
                                </li>
                                <li>
                                    <a href="#">OUR CAUSES</a>
                                </li>
                                <li>
                                    <a href="#">BLOG</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row align-items-center">
                    <h1>CLIMATE.</h1>
                    <span>Create a climate-resilient and zero-carbon world, powered by renewable energy.</span>
                            <img className="img" src="./img/1.webp" alt="" />
                            <img className="img" src="./img/2.webp" alt="" />
                            <img className="img" src="./img/3.webp" alt="" />
                            </div>
                        </div>
                    </section>
                    )
}
                    export default Header;