/* eslint-disable react/prop-types */

const Donations = ({item}) => {
    const {picture, category, title, category_bg, text_color, btn_color, card_bg, price} = item
    return (
        <div style={{backgroundColor:` ${card_bg}`}} className="flex gap-5 items-center mb-3">
            <div>
                <img src={picture} alt="" />
            </div>


            <div >
                <div style={{backgroundColor: `${category_bg}`}}  className="w-[80px] p-1 rounded-lg flex justify-center items-center">
                <p>{category}</p>
                </div>
                    <h1 className="font-bold mt-2">{title}</h1>
                    <p className="font-bold" style={{color:`${text_color}`}}>{price}</p>
                    <button style={{backgroundColor:`${btn_color}`}} className="text-white p-2 rounded-lg mt-1">View details</button>

                
            </div>
           
        </div>
    );
};

export default Donations;