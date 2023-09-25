import { Chart } from 'react-google-charts';

const Statistics = () => {
    const donationItems = JSON.parse(localStorage.getItem('donations'));

    const len = donationItems.length;
    const percentage = (len / 12) * 100;
    const fixedPercentage = parseFloat(percentage.toFixed(2));
    const remainPercentage = 100 - fixedPercentage;

    const chartData = [
        ['Category', 'Percentage'],
        ['Donated', fixedPercentage],
        ['Remaining', remainPercentage],
    ];

    const options = {
        title: 'Donation Statistics',
        is3D: true, 
    };

    return (
        <div className='flex justify-center items-center'>
            
            <Chart
                chartType="PieChart"
                width={'900px'}
                height={'600px'}
                data={chartData}
                options={options}
                loader={<div>Loading Chart...</div>}
            />
        </div>
    );
};

export default Statistics;
