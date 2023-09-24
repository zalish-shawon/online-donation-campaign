import { useEffect, useState } from "react";
import DoanteCards from "../donateCards/DoanteCards";

const Home = () => {
    const [donations, setDonations] = useState([])

    useEffect(() => {
            fetch('/public/donate.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    },[])
    return (
        <div className="w-[95%] mx-auto">
            <h1 className="text-4xl font-bold text-center pt-14">I Grow By Helping People In Need</h1>
            <div className="text-center p-3 flex items-center justify-center mb-14">
            <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />
            <button className="btn text-white bg-[#FF444A] ml-3">Search</button>

            </div>

            <div className="grid grid-cols-4 gap-3">
                {
                    donations?.map(item => <DoanteCards key={item.id} item={item}></DoanteCards>)
                }
            </div>
        </div>
    );
};

export default Home;