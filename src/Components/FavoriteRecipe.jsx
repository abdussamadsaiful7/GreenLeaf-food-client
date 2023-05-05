import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from './Recipes';
import { FaRegThumbsUp } from "react-icons/fa";

const FavoriteRecipe = () => {
    const singleData = useLoaderData()
    console.log(singleData)
    const { chef_name, chef_picture, designation, number_of_recipes, years_of_experience,
        career_bio, likes, recipes } = singleData;
    return (
        <div className='md:mx-10 mt-8'>
            <div className='bg-[url("https://i.ibb.co/DtDb1jp/leaves-Red.jpg")] bg-cover md:py-4'>
                <p className='text-center text-2xl mx-2 font-bold mb-10'>Pᴇʀsᴏɴᴀʟ ᴀᴄᴏ̨ᴜᴀɪɴᴛᴀɴᴄᴇ ᴏғ Cʜᴇғ.</p>
                <img className='w-96 h-96 mx-auto bg-white p-4 shadow-lg' src={chef_picture} />
                <div className='text-center md:mx-20 mx-4 mt-4'>
                    <h1 className='text-2xl font-semibold'>Chef. {chef_name}</h1>
                    <p><span className='font-semibold'>Designation:</span> {designation}</p>
                    <p><span className='font-semibold'>Chef Experience:</span> {years_of_experience} years.</p>
                    <p><span className='font-semibold'>Number of Recipes:</span>{number_of_recipes} Items</p>
                    <p className='flex items-center justify-center'> <FaRegThumbsUp className='mr-2' /> Likes: {likes}K</p>
                    <p className='text-gray-600'><span className='text-xl font-semibold text-black '>Career's Bio</span>: {career_bio}</p>
                </div>
            </div>
            <div className='text-center my-4 text-2xl font-bold'>
                <h1>𝑭𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒇𝒐𝒐𝒅 𝒍𝒊𝒔𝒕</h1>
            </div>
            <div className='grid lg:grid-cols-3 my-10 md:mx-14 mx-4 gap-4'>
                {
                    recipes.map(recipe => <Recipes key={recipe.name} recipe={recipe}></Recipes>)
                }

            </div>
        </div>
    );
};

export default FavoriteRecipe;