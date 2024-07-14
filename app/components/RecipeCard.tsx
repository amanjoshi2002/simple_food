"use client";


import { useRouter } from 'next/navigation';
import { Recipe } from '../data/recipes';

interface RecipeCardProps {
  title: Recipe['title'];
  imageUrl: Recipe['imageUrl'];
  link: Recipe['link'];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, imageUrl, link }) => {
  const router = useRouter();

  const handleClick = () => {
    const urlFriendlyTitle = title.replace(/\s+/g, '-').toLowerCase();
    router.push(`/recipe/${urlFriendlyTitle}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
    </div>
  );
};

export default RecipeCard;
