import foto from "../../assets/foto.jpg";
import "./styles.css";

export default function About() {
    return (
        <main id="about">
            <img src={foto} alt="Linguine" className="img-about" />
            <p>Olá! Meu nome é Mateus, e atualmente sou aluno do Certified Tech Developer...</p>
        </main>
    );
}