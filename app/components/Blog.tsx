// components/Blog.tsx

import React from 'react';
import RecipeCard from './RecipeCard';
import { recipes } from '../data/recipes';

const Blog = () => {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-yellow-400">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} title={recipe.title} imageUrl={recipe.imageUrl} link={`/recipes/${encodeURIComponent(recipe.title.toLowerCase().replace(/\s+/g, '-'))}`} />
        ))}
      </div>
      <ul className="mt-10 text-left list-disc list-inside text-yellow-400">
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.title}</li>
        ))}
      </ul>
      <div className="mt-10 text-yellow-400">
        I’d love to hear if you have tried any of the recipes. Why not share a photo on Facebook or Instagram with the #simplefood and #cookingathome tags.
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <button className="btn btn-outline btn-sm">Like</button>
        <span className="flex items-center space-x-2">
          <img src="/path/to/avatar1.jpg" alt="Avatar" className="w-6 h-6 rounded-full" />
          <img src="/path/to/avatar2.jpg" alt="Avatar" className="w-6 h-6 rounded-full" />
          <img src="/path/to/avatar3.jpg" alt="Avatar" className="w-6 h-6 rounded-full" />
          <span>75 likes</span>
        </span>
      </div>
    </div>
  );
};

export default Blog;
