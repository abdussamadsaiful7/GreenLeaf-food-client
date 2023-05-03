import React from 'react';
import chief from '../assets/chief.jpg'
import service from '../assets/service_food.jpg'
import Chef from './Chef';
import pic1 from '../assets/pic-1.jpg'
import pic2 from '../assets/pic-2.jpg'
import pic3 from '../assets/pic-3.jpg'
import pic4 from '../assets/pic-4.jpg'


const Home = () => {
    return (
        <div className='mx-10'>
            <div className=' mt-10 lg:flex justify-between my-10 shadow-lg p-4'>
                <div className='p-4'>
                    <p> Bangladeshi restaurant!</p>
                    <h1 className='font-bold text-4xl'>𝑮𝒓𝒆𝒆𝒏𝑳𝒆𝒂𝒇 𝒇𝒐𝒐𝒅 𝑹𝒔𝒕.</h1>
                    <h5><small className='ml-72'>Since 1992.</small><br /><small className='ml-40'>Allah Korim mosque, Mohammadpur, <br /> <span className='ml-64'>Dhaka, Bangladesh.</span></small></h5>
                    <button className=' bg-yellow-500 text-white p-1 my-2 text-right rounded font-semibold'>Our mission, purpose, tradition.</button>
                    <p>Welcome to our restaurant in Dhaka, Bangladesh, where we pride ourselves on serving traditional and famous dishes that will tantalize your taste buds. Our menu features an array of authentic Bangladeshi cuisine, prepared with fresh, local ingredients and seasoned with aromatic spices. We aim to provide a dining experience that showcases the rich culinary heritage of our country while also delivering exceptional customer service. Come and enjoy our delicious food, and let us transport you to the heart of Bangladesh's gastronomic culture.</p>
                </div>
                <div>
                    <img className='rounded-lg shadow-lg' src={chief} alt='photo' />
                </div>
            </div>
            <div className='lg:flex items-center justify-around  my-10 p-8 shadow-lg'>
                <div>
                    <img className='w-96 rounded-md shadow-lg' src={service} />
                </div>
                <div className='ml-20'>
                    <h2 className='bg-yellow-500 text-3xl my-8 py-2 rounded 
                    text-white font-bold mr-96 text-center shadow-lg'>𝑶𝒖𝒓 𝑺𝒆𝒓𝒗𝒊𝒄𝒆𝒔</h2>
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
            <div className='bg-white p-8 shadow-lg'>
                <div className="carousel w-auto h-96 bg-white shadow-lg rounded-lg">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={pic1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={pic2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={pic3}  className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={pic4}  className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <Chef></Chef>
        </div>
    );
};

export default Home;