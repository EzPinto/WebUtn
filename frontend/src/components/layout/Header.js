import React from 'react'; 
import "../../styles/components/layout/Header.css";

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="images/logo.jpg" width="100" alt="Logo" />
                    <h1>La Sangre es Vida</h1>
                </div>
            </div>
        </header>
            
    );
}

export default Header;