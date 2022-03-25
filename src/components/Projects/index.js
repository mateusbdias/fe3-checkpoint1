import fotoClinica from "../../assets/clinica.png";
import fotoTodo from "../../assets/todo.png";
import fotoSP from "../../assets/sao_paulo.png";
import "./styles.css";

const data = [
    {
      id: "1",
      name: "Projeto Clínica - Back End I",
      link: "https://github.com/mateusbdias/be1-aula21",
      image: fotoClinica,
    },
    {
      id: "2",
      name: "React To-Do - Front End III",
      link: "https://github.com/mateusbdias/fe3-aula07",
      image: fotoTodo,
    },
    {
      id: "3",
      name: "Info SP - Front End I",
      link: "https://github.com/mateusbdias/frontend1-checkpoint1",
      image: fotoSP,
    },
  ];

export default function Projects() {
    return (
        <div className="content-projects" id="projects">
            <h1 className="title-projects">Projetos</h1>
            <ul className="list-projects">
                {
                    data.map(({ image, name, link }) => (
                      <a href={link}>
                        <li className="item-list-projects">
                            <img src={image} alt={name} width={350} />
                            <h3 className="name-project">{name}</h3>
                        </li>
                      </a>
                    ))
                }
            </ul>
        </div>
    );
}