import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin, BsFillBasketFill } from 'react-icons/bs';

export default function Social() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: 30}}>
            <a>
                <FiInstagram size={60} color="purple" />
            </a>
            <a>
                <BsLinkedin size={60} color="blue" />
            </a>
            <a>
                <BsFillBasketFill size={60} />  
            </a>
        </div>
    );
}