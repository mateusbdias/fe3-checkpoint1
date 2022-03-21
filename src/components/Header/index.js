import logo from "../../assets/logo.png";
import "./styles.css";

export default function Header() {
    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView()
    }

    return (
        <header>
            <img src={logo} height={50} />

            <ul className="menu">
                <li className="item-menu" onClick={() => scrollToComponent("projects")}>Projetos</li>
                <li className="item-menu">Ferramentas</li>
                <li className="item-menu" onClick={() => scrollToComponent("about")}>Sobre</li>
            </ul>
        </header>
    );
}