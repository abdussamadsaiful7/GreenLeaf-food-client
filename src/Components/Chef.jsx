import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Chef = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://assignment-server-abdussamadsaiful7.vercel.app/allData')
            .then(res => res.json())
            .then(data =>setAllData(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='mt-10'>
            <div className=''>
                <div className='text-center'>
                    <h2 className='text-5xl'>𝙊𝙪𝙧 𝒄𝒉𝒆𝒇𝙨</h2>
                    <p><span className='text-2xl'>🥧</span>Good services and fresh foods are our motto.
                    <span className='text-2xl'>🥧</span></p>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 mx-5 mt-20'>
                {
                    allData.map(data=><ChefCard key={data.id} data={data}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chef;