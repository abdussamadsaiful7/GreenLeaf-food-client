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
                <figure><img src={image_url} alt="food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Food Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Price: $ {price}</p>
                    <div className="card-actions justify-end">
                        <button disabled={disabled} onClick={notify} className="btn btn-primary">
                            Favorite Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;