import React, { useEffect, useState } from 'react';
import categories from '../categories.json';

const DynamicContent = ({ categoryid }: { categoryid: string }) => {
  const [content, setContent] = useState<{ title: string; recipes: { title: string; content: string; photo: string }[] } | null>(null);

  useEffect(() => {
    console.log("Fetching category for ID:", categoryid); 

    const category = categories.find(cat => cat.categoryid === categoryid);
    
    if (category) {
      console.log("Category found:", category); 
      setContent(category);
    } else {
      console.log("Category not found");
    }
  }, [categoryid]);

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h1>{content.title}</h1>
      {content.recipes.map(recipe => (
        <div key={recipe.title}>
          <h2>{recipe.title}</h2>
          <p>{recipe.content}</p>
          <img src={recipe.photo} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
};

export default DynamicContent;
