import "./styles.css";

const data = [
    {
        id: "1",
        name: "Java",
        link: "https://en.wikipedia.org/wiki/Java_(programming_language)",
        image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
        id: "2",
        name: "MySQL",
        link: "https://en.wikipedia.org/wiki/MySQL",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    },
    {
        id: "3",
        name: "Javascript",
        link: "https://en.wikipedia.org/wiki/JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
        id: "4",
        name: "React",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        id: "5",
        name: "Python",
        link: "https://en.wikipedia.org/wiki/Python_(programming_language)",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
  ];

export default function CodingTools() {
    return (
        <div className="content-tools" id="tools">
            <h1 className="title-tools">Ferramentas</h1>
            <ul className="list-tools">
                {
                    data.map(({ image, name, link }) => (
                        <li className="item-list-tools">
                            <a href={link}>
                                <div className="tool" id={name}>
                                    <img src={image} alt={name} />
                                    <h3 className="name-tool">{name}</h3>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}