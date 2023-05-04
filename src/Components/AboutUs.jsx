import React from 'react'
import res0 from '../assets/res.jpg'
import res1 from '../assets/res2.jpg'
import res2 from '../assets/res3.jpg'
import brach1 from '../assets/branch1.jpg'
import brach2 from '../assets/branch2.jpg'
import brach3 from '../assets/branch3.jpg'
import Lottie from "lottie-react";
import about from "../assets/121689-restaurant.json";





const AboutUs = () => {
    return (
        <div className='mx-20 mt-8 mb-14'>

            {/* <div className='lg:flex justify-center gap-4'>
                <div className='shadow-lg p-4'>  <img className='w-96' src={res1} /></div>
                <div className='shadow-lg p-4'> <img className='w-96 ' src={res2} /></div>
            </div> */}

            <div className='w-80 h-64 mx-auto'>
                <div>
                    <Lottie animationData={about} loop={true} />
                </div>
            </div>

            <h2 className='text-center text-4xl font-semibold mb-2'>𝑨𝒃𝒐𝒖𝒕 𝑼𝒔</h2>
            <p>Welcome to our Bangladeshi restaurant, it's establish in 1992, where we're dedicated to providing our guests with an unforgettable dining experience. Our menu is inspired by the rich and diverse culinary traditions of our region, and we're committed to using only the freshest and highest-quality ingredients in every dish we serve.</p>
            <br />
            <p> Our chefs are passionate about their craft, and their creativity and expertise are reflected in every item on our menu. We're equally passionate about hospitality, and our friendly and attentive staff will do everything they can to ensure that your visit is enjoyable and memorable.</p>
            <br />
            <p> Whether you're joining us for a romantic dinner for two, a family celebration, or a business lunch, we have the perfect ambiance to suit your needs. Our comfortable and inviting dining room is the perfect place to relax and unwind, and our private dining areas are ideal for special occasions or corporate events.</p>
            <br />
            <p> We're also proud to offer a wide variety of wines and craft cocktails to complement your meal. Our beverage program has been carefully curated to showcase the best local and international offerings, and our expert bartenders are always happy to recommend the perfect pairing for your dish.</p>
            <br />
            <p>At our restaurant, we believe that every meal should be a celebration of good food, good wine, and good company. Come join us and experience the difference for yourself!</p>
            <div className='my-10'>
                <h1 className='text-center text-2xl font-semibold mb-4'>
                    𝐎𝐮𝐫 𝐦𝐨𝐬𝐭 𝐩𝐨𝐩𝐮𝐥𝐚𝐫 𝐁𝐫𝐚𝐧𝐜𝐡 𝐨𝐟 𝐃𝐡𝐚𝐤𝐚, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡.
                </h1>
                <div className='grid lg:grid-cols-3 gap-4'>
                    <div className='shadow-lg p-2'>
                        <img className='w-96 h-64' src={brach1} alt="" />
                        <p className='p-2'> KFC Bashundhara City: Level 7, Block B, Bashundhara City Shopping Complex, Panthapath, Dhaka 1215, Bangladesh.</p>
                    </div>
                    <div className='shadow-lg p-2'>
                        <img className='w-96 h-64' src={brach2} alt="" />
                        <p className='p-2'> KFC Gulshan: Rangs Fortune Square, House 152, Road 12, Block E, Banani, Dhaka 1213, Bangladesh.</p></div>
                    <div className='shadow-lg p-2'>
                        <img className='w-96 h-64' src={brach3} alt="" />
                        <p className='p-2'>KFC Dhanmondi: 40/7, West Panthapath, Dhaka 1205, Bangladesh.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;