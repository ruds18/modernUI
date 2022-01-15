import React, { useState } from 'react'
import '../navbar/Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
const Navbar = () => {
    const Menu = () => (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Projects</a></p>
            <p><a href="#blog">Insight</a></p>
        </>
    )
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="gpt3_navbar">
            <div className="gpt3_navbar-links">
                <div className="gpt3_navbar-links_logo">
                    <img src="https://aiclub.aivit.tech/images/club-logo.png"></img>
                </div>
                <div className="gpt3_navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3_navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3_navbar-menu">
                {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3_navbar-menu_container scale-up-center">
                        <div className="gpt3_navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3_navbar-menu_container-links-sign ">
                                <p>Sign In</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
