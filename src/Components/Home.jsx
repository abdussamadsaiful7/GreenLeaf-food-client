import React from 'react';
import chief from '../assets/chief.jpg'
import service from '../assets/service_food.jpg'

const Home = () => {
    return (
        <div className='mx-10'>
            <div className=' mt-10 lg:flex justify-between my-10 shadow-lg p-4'>
                <div className='p-4'>
                    <h1 className='font-bold text-4xl'>𝑮𝒓𝒆𝒆𝒏𝑳𝒆𝒂𝒇 𝒇𝒐𝒐𝒅 𝑹𝒔𝒕.</h1>
                    <h5><small className='ml-72'>Since 1992.</small><br /><small className='ml-40'>Allah Korim mosque, Mohammadpur, <br /> <span className='ml-64'>Dhaka, Bangladesh.</span></small></h5>
                    <button className=' bg-yellow-500 text-white p-1 my-2 text-right rounded font-semibold'>Our mission, purpose, tradition.</button>
                    <p>Welcome to our restaurant in Dhaka, Bangladesh, where we pride ourselves on serving traditional and famous dishes that will tantalize your taste buds. Our menu features an array of authentic Bangladeshi cuisine, prepared with fresh, local ingredients and seasoned with aromatic spices. We aim to provide a dining experience that showcases the rich culinary heritage of our country while also delivering exceptional customer service. Come and enjoy our delicious food, and let us transport you to the heart of Bangladesh's gastronomic culture.</p>
                </div>
                <div>
                    <img className='rounded' src={chief} alt='photo' />
                </div>
            </div>
            <div className='lg:flex items-center justify-around  my-10 p-8 shadow-lg'>
                <div>
                    <img className='w-96 rounded-md' src={service} />
                </div>
                <div className='ml-20'>
                    <h2 className='bg-yellow-400 text-3xl my-8 rounded text-white font-bold mr-96 text-center'>Our Services</h2>
                    <ul>
                        <li className='mb-2 text-lg'> 🍔 Home delivery</li>
                        <li className='mb-2 text-lg'> 🍦 Instant Food cooking</li>
                        <li className='mb-2 text-lg'> 🍨 Fresh and good food provide</li>
                        <li className='mb-2 text-lg'> 🍻 Bangali Traditional provide</li>
                        <li className='mb-2 text-lg'> 🍹 Dine-in service in a comfortable and welcoming atmosphere</li>
                        <li className='mb-2 text-lg'> 🍟 Take-out and delivery options for those on the go</li>
                        <li className='mb-2 text-lg'> 🍵 Catering services for events and special occasions</li>
                        <li className='mb-2 text-lg'> 🍜 Online ordering through our website or mobile app for easy and hassle-free ordering</li>
                        <li className='text-lg'>Special deals and promotions to help you save on your favorite dishes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;