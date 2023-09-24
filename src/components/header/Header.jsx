import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="w-[95%] mx-auto">
            <nav>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <img className="w-[200px]" src="/public/resources/Logo.png" alt="" />
                    </div>
                    <div className="flex-none">
                        <ul className="flex gap-5 items-center font-semibold">
                            <Link to={"/"}><a>Home</a></Link>
                            <Link to={"/donation"}><a>Donation</a></Link>
                            <Link to={"/statics"}><a></a>Statistics</Link>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;