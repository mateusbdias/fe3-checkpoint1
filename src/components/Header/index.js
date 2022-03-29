import { useState } from 'react';
import Hamburger from 'hamburger-react';
import logo from "../../assets/logo.png";
import "./styles.css";

export default function Header() {
    const [isOpen, setOpen] = useState(false)

    
    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView()
    }

    return (
        <header>
            <div className="header-menu">
                <img src={logo} alt="Dev Logo" height={50} />
                <ul className="list-menu">
                    <li className="item-menu" onClick={() => scrollToComponent("about")}>Sobre</li>
                    <li className="item-menu" onClick={() => scrollToComponent("projects")}>Projetos</li>
                    <li className="item-menu" onClick={() => scrollToComponent("tools")}>Ferramentas</li>
                </ul>
            
            
            </div>
            <div className="header-menu-hamburger">
                <div className="menu-hamburger">
                    <img src={logo} alt="Dev Logo" height={50} />
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                { isOpen && 
            
                <ul className="list-menu-hamburger">
                    <li className="item-menu-hamburger" onClick={() => scrollToComponent("about")}>Sobre</li>
                    <li className="item-menu-hamburger" onClick={() => scrollToComponent("projects")}>Projetos</li>
                    <li className="item-menu-hamburger" onClick={() => scrollToComponent("tools")}>Ferramentas</li>
                </ul>
                }
            </div>
        </header>
    );
}