
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";



const Icons = () => {
    
    return (
        <div className="text-center">
            
            <FontAwesomeIcon className="text-CustomBlue border-solid border-2
             border-Gray rounded-full p-2 text-sm hover:bg-sky-700 hover:text-white mx-3 mt-8" icon={faFacebookF} />
            <FontAwesomeIcon className="text-CustomBlue border-solid border-2
             border-Gray rounded-full p-2 text-sm hover:bg-sky-700 hover:text-white" icon={faTwitter} />
            <FontAwesomeIcon className="text-CustomBlue border-solid border-2
             border-Gray rounded-full p-2 text-sm hover:bg-sky-700 hover:text-white mx-3" icon={faInstagram} />
            

        </div>
    );
};

export default Icons;