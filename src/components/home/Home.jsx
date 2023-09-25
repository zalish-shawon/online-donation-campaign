import { useEffect, useState } from "react";
import DoanteCards from "../donateCards/DoanteCards";

const Home = () => {
    const [donations, setDonations] = useState([])

    useEffect(() => {
        fetch('/public/donate.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])
    return (
        <div className=" w-[95%] mx-auto">

            <div className="hero h-[400px] mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/kQzxK7X/Clothing.png)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                
                <div>
                <h1 className="text-4xl font-bold text-center text-gray-300 mb-5">I Grow By Helping People In Need</h1>
                    <div className=" flex gap-2 justify-center items-center">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button className="btn bg-[#FF444A] text-white">Search</button>
                    </div>
                </div>
            </div>


            


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                {
                    donations?.map(item => <DoanteCards key={item.id} item={item}></DoanteCards>)
                }
            </div>
        </div>
    );
};

export default Home;