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
        <div className='mt-20'>
            <div className='bg-slate-200 p-4 shadow-md mb-14'>
                <div className='text-center bg-white shadow-lg p-2'>
                    <h2 className='text-4xl'>𝙊𝙪𝙧 𝙎𝙩𝙖𝙛𝙛𝙨</h2>
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