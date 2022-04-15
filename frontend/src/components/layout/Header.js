import React from 'react'; 
import "../../styles/components/layout/Header.css";

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <a href='/'><img className="logo" src="images/logo.jpg" width="100" alt="Logo" /></a>
                    <a href='/'><h1>La Sangre es Vida</h1></a>
                </div>
            </div>
        </header>
            
    );
}

export default Header;