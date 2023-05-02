import React from 'react';

const Recipes = ({ recipe }) => {
    console.log(recipe)
    const { description, image_url, name, price } = recipe;
    return (
        <div>
            <div className="card card-compact w-80 h-3/4 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Food Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;