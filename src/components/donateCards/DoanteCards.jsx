/* eslint-disable react/prop-types */
import React from 'react';

const DoanteCards = ({ item }) => {
    const { picture, title, category, category_bg, card_bg, text_color, btn_color } = item

    return (
        <div>
            <div style={{backgroundColor: `${card_bg}`}} className="card  shadow-xl cursor-pointer">
                <figure><img className='w-full' src={picture} alt="" /></figure>
                <div className="card-body">
                    
                        <div style={{backgroundColor: `${category_bg}`}} className="badge">{category}</div>
                    
                    <p style={{color: `${text_color}`}} className='font-bold'>{title}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DoanteCards;