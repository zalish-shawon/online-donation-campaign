const Statistics = () => {
    const donationItems = JSON.parse(localStorage.getItem('donations'))
   
    // const total = donationItems.reduce((preValue, currentValue) => preValue + currentValue.price,0)

    // console.log(total);

    const len = donationItems.length
    const percentage = (len / 12) * 100
    const fixedPercentage = percentage.toFixed(2)
    const remainPercentage = 100 - fixedPercentage
    console.log(remainPercentage);
   

    
    return (
        <div>
            
        </div>
    );
};

export default Statistics;