import React from 'react';
import chief from '../assets/chief.jpg'
import service from '../assets/service_food.jpg'
import Chef from './Chef';
import pic0 from '../assets/recipe.jpg'
import pic1 from '../assets/pic-1.jpg'
import pic2 from '../assets/pic-2.jpg'
import pic3 from '../assets/pic-3.jpg'
import pic4 from '../assets/pic-4.jpg'
import { FaLeaf } from "react-icons/fa";
import Lottie from "lottie-react";
import chef from "../assets/120972-chef.json";
import rest from "../assets/21652-delivery-guy-waiting.json";
import showing from "../assets/75820-chef-showing-the-burger.json";
import foodServe from '../assets/foodServe.jpg'
import Propuler from './Propuler';



const Home = () => {
    return (
        <div className='lg:mx-10'>
            <div style={{ backgroundImage: "url('https://i.ibb.co/RhWc59f/new222.jpg')", }}
                className=' lg:flex justify-between mb-10 shadow-lg p-4'>
                <div className='lg:p-4 font-bold'>
                    <p> Bangladeshi restaurant!</p>

                    <h1 className='font-bold lg:text-4xl flex'><span className='text-green-400'><FaLeaf /></span>𝑮𝒓<span className='text-green-400'>𝒆𝒆𝒏𝑳𝒆</span>𝒂𝒇 𝒇𝒐𝒐𝒅 𝑹𝒔𝒕.</h1>

                    <h5><small className='md:ml-72'>Since 1992.</small><br /><small className='md:ml-40'>Allah Korim mosque, Mohammadpur, <br /> <span className='md:ml-64'>Dhaka, Bangladesh.</span></small></h5>
                    <button className=' bg-yellow-500 text-white p-1 my-2 text-right rounded font-semibold'>Our mission, purpose, tradition.</button>
                    <p>Welcome to our restaurant in Dhaka, Bangladesh, where we pride ourselves on serving traditional and famous dishes that will tantalize your taste buds. Our menu features an array of authentic Bangladeshi cuisine, prepared with fresh, local ingredients and seasoned with aromatic spices. We aim to provide a dining experience that showcases the rich culinary heritage of our country while also delivering exceptional customer service. Come and enjoy our delicious food, and let us transport you to the heart of Bangladesh's gastronomic culture.</p>
                </div>
                <div>
                <Lottie className='md:w-96 md:h-96 mx-auto w-64' animationData={showing} loop={true} />
                </div>
            </div>
            <div className=' lg:flex items-center justify-around  my-8 p-8 shadow-lg 
            bg-[url("https://i.ibb.co/0Z4z0f6/gb-55.jpg")] bg-cover'>
                <div className='ml-20 '>

                    <h2 className='bg-yellow-500 text-3xl my-8 py-2 rounded 
                    text-white font-bold mr-64 text-center shadow-lg'>𝑶𝒖𝒓 𝑺𝒆𝒓𝒗𝒊𝒄𝒆𝒔</h2>
                    <ul className='font-semibold'>
                        <li className='mb-2 text-lg'> 🍔 Home delivery</li>
                        <li className='mb-2 text-lg'> 🍦 Instant Food cooking</li>
                        <li className='mb-2 text-lg'> 🍨 Fresh and good food provide</li>
                        <li className='mb-2 text-lg'> 🍻 Bangali Traditional provide</li>
                        <li className='mb-2 text-lg'> 🍹 Dine-in service in a comfortable and welcoming atmosphere</li>
                        <li className='mb-2 text-lg'> 🍟 Take-out and delivery options for those on the go</li>
                        <li className='mb-2 text-lg'> 🍵 Catering services for events and special occasions</li>
                        <li className='mb-2 text-lg'> 🍜 Online ordering through our website or mobile app for easy and hassle-free ordering</li>
                        <li className='text-lg'>🍻 Special deals and promotions to help you save on your favorite dishes</li>
                    </ul>
                </div>
                {/* Lottie Animation */}
                <div>
                    <div >
                        <Lottie className='md:w-96 md:h-96 mx-auto w-64' animationData={rest} loop={true} />
                    </div>
                </div>
            </div>
            <div className='bg-white p-8 shadow-lg'>
                <div className="carousel w-auto h-96 bg-white shadow-lg rounded-lg">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={pic0} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
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
                        <img src={pic3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={pic4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-64 h-64 mx-auto'>
                <Lottie animationData={chef} loop={true} />
            </div>

            <Chef></Chef>
            <Propuler></Propuler>
        </div>
    );
};

export default Home;