import mateus from "../../assets/mateus.jpg";
import "./styles.css";

export default function About() {
    return (
        <main id="about">
            <img src={mateus} alt="Mateus" className="img-about" />
            <p>Olá! Meu nome é Mateus, sou advogado e Mestre em Direito, e atualmente estou cursando o 3º bimestre do Certified Tech Developer na Digital House Brasil. Esta página servirá como um repositório para os projetos em desenvolvimento ao longo da minha trajetória como aluno do CTD e como desenvolvedor de aplicações.</p>
        </main>
    );
}