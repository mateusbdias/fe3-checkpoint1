import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import "./styles.css";

export default function Social() {
    const linkedinUrl = "https://www.linkedin.com/in/mateus-benites-dias/";
    const githubUrl = "https://www.github.com/mateusbdias";
    const mailtoUrl = "mailto:mateusdias@outlook.com";
    
    return (
        <div className="container-social">
            <a href={linkedinUrl}>
                <BsLinkedin size={30} />
            </a>
            <a href={githubUrl}>
                <BsGithub size={30} />  
            </a>
            <a href={mailtoUrl}>
                <FiMail size={30} />
            </a>
        </div>
    );
}