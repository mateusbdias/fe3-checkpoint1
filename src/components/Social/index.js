import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import "./styles.css";

export default function Social() {
    const instaUrl = "https://www.instagram.com/";
    const linkedinUrl = "https://www.linkedin.com/";
    const githubUrl = "https://www.github.com/";
    
    return (
        <div className="container-social">
            <a href={instaUrl}>
                <BsInstagram size={30} />
            </a>
            <a href={linkedinUrl}>
                <BsLinkedin size={30} />
            </a>
            <a href={githubUrl}>
                <BsGithub size={30} />  
            </a>
        </div>
    );
}