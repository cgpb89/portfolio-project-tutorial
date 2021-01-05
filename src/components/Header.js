import React from "react";
import Typed from "react-typed";


const typeString = ["Web Design", "Web Development", "JavaScript", "React"]

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and Web sites development</h1>
                <Typed 
                    className="typed-text"
                    strings={typeString}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me!!!</a>
            </div>
        </div>
    )
}

export default Header;