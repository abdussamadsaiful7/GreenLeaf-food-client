import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Recipes = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    console.log(recipe)
    const { description, image_url, name, price } = recipe;

    const notify = () => {
        setDisabled(true);
        toast.success('thank you, Added your Favorite Recipe!');
    }


    return (
        <div>
            <div className="card card-compact w-80 h-3/4 bg-base-100 shadow-xl">
                <figure><img className='w-96 h-96' src={image_url} alt="food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Food Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Price: $ {price}</p>
                    <div className="card-actions justify-end">
                        <button disabled={disabled} onClick={notify} className="btn btn-sm btn-active btn-ghost hover:text-red-600 font-bold">
                            Favorite Recipe</button>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
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

export default Recipes;