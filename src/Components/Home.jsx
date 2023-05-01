import React from 'react';
import chief from '../assets/chief.jpg'

const Home = () => {
    return (
        <div className='mx-10 mt-10 lg:flex justify-between my-10 shadow-lg p-4'>
            <div className='p-4'>
                <h1 className='font-bold text-4xl'>𝑮𝒓𝒆𝒆𝒏𝑳𝒆𝒂𝒇 𝒇𝒐𝒐𝒅 𝑹𝒔𝒕.</h1>
                <h5><small className='ml-72'>Since 1992.</small><br/><small className='ml-40'>Allah Korim mosque, Mohammadpur, <br/> <span className='ml-64'>Dhaka, Bangladesh.</span></small></h5>
                <button className=' bg-yellow-500 text-white p-1 my-2 text-right rounded font-semibold'>Our mission, purpose, tradition.</button>
                <p>Welcome to our restaurant in Dhaka, Bangladesh, where we pride ourselves on serving traditional and famous dishes that will tantalize your taste buds. Our menu features an array of authentic Bangladeshi cuisine, prepared with fresh, local ingredients and seasoned with aromatic spices. We aim to provide a dining experience that showcases the rich culinary heritage of our country while also delivering exceptional customer service. Come and enjoy our delicious food, and let us transport you to the heart of Bangladesh's gastronomic culture.</p>
            </div>
            <div>
                <img className='rounded' src={chief} alt='photo'/>
            </div>
        </div>
    );
};

export default Home;