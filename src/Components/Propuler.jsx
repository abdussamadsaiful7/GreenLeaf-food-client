import React from 'react';
import Butter from '../assets/butterChicken.jpg'
import Chana from '../assets/Chana.jpg'
import Paneer from '../assets/Paneer.jpg'

const Propuler = () => {
    return (
        <div>
            <h1 className='text-center text-4xl mb-8'>𝑷𝒐𝒑𝒖𝒍𝒂𝒓 𝑹𝒆𝒄𝒊𝒑𝒆𝒔</h1>
            <div className='grid lg:grid-cols-3 gap-4 mb-10'>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img className='w-96 h-80' src={Butter} alt=" Butter" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Butter Chicken</h2>
                        <p> Butter Chicken is one of the most popular curries at any Indian restaurant around the world. Aromatic golden chicken pieces in an incredible creamy curry sauce, this Butter Chicken recipe is one of the best you will try! You will love how easy it is to make in the comfort of your own home,</p>

                    </div>
                    <div className='flex justify-between items-center mt-4 px-4 py-4'>
                        <div>
                            <p className='font-medium'>Ratings</p>
                        </div>
                        <div>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img className='w-96 h-80' src={Chana} alt="Chana" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Palak Paneer</h2>
                        <p>Palak Paneer is one of those dishes that can even turn a boring weekday meal into something to look forward to, especially if you love paneer! Chunks of soft cottage cheese, simmered in a mildly spiced, creamy spinach puree, offers a great balance of taste and texture. This nutritious dish is also one of the best ways to make kids eat their share of leafy greens without a fuss!</p>

                    </div>
                    <div className='flex justify-between items-center mt-4 px-4 py-4'>
                        <div>
                            <p className='font-medium'>Ratings</p>
                        </div>
                        <div>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img className='w-96 h-80' src={Paneer} alt="Paneer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Chana Masala</h2>
                        <p>Garam masala is traditionally used in chana masalas. Garam masala roughly translates to “hot spice mix” in English. It’s made from a blend of coriander, cumin, cardamom (green and black), cinnamon, black pepper, cloves, and other spices that vary by region and preference.</p>

                    </div>
                    <div className='flex justify-between items-center mt-4 px-4 py-4'>
                        <div>
                            <p className='font-medium'>Ratings</p>
                        </div>
                        <div>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Propuler;