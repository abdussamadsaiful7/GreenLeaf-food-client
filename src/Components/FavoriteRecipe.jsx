import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from './Recipes';

const FavoriteRecipe = () => {
    const singleData = useLoaderData()
    console.log(singleData)
    const { chef_name, chef_picture, designation, number_of_recipes, years_of_experience, career_bio, recipes } = singleData;
    return (
        <div className='my-14'>
            <img className='w-96 h-96 mx-auto' src={chef_picture} />
            <div className='text-center mx-20 mt-4'>
                <h1 className='text-xl font-semibold'>Chef {chef_name}</h1>
                <p>Designation: {designation}</p>
                <p>Chef Experience: {years_of_experience} years.</p>
                <p>Number of Recipes: {number_of_recipes} Items</p>
                <p><span className='font-semibold'>Career's Bio</span>: {career_bio}</p>
            </div>
            <div className='text-center my-4 text-2xl font-bold'>
            <h1>𝑭𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒇𝒐𝒐𝒅 𝒍𝒊𝒔𝒕</h1>
            </div>
            <div className='grid lg:grid-cols-3 my-10 mx-14 gap-4'>
                {
                    recipes.map(recipe=><Recipes key={recipe.name} recipe={recipe}></Recipes>)
                }
                
            </div>
        </div>
    );
};

export default FavoriteRecipe;