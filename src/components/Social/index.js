import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import "./styles.css";

export default function Social() {
    return (
        <div className="container-social">
            <a>
                <BsInstagram size={60} />
            </a>
            <a>
                <BsLinkedin size={60} />
            </a>
            <a>
                <BsGithub size={60} />  
            </a>
        </div>
    );
}