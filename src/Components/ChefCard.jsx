import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ data }) => {
    //console.log(data)
    const { chef_name, number_of_recipes, designation, chef_picture, years_of_experience, likes } = data;

    return (
        <div className=''>
            <div className="card w-80 h-3/4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chef_picture} alt="photo" className="rounded-lg w-96 h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {chef_name}</h2>
                    <p>Designation: {designation}</p>
                    <p>Chef Experience: {years_of_experience} years.</p>
                    <p>Number of Recipes: {number_of_recipes} Items</p>
                    <p>👍 {likes}K</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`/recipe/${data.id}`} >Favorite Recipe</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;

