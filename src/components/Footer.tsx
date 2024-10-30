import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                MernEats.com
            </span>
            <nav>
                <ul className="text-white font-bold tracking-tight flex gap-4">
                    <li>
                        <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/">Terms of Service</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </div>
    )
  }
  
  export default Footer;