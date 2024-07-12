// app/[categoryid]/page.tsx
"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import DynamicContent from '../components/DynamicContent';
import NavBar from '../components/NavBar';

const DynamicPage = () => {
  const { categoryid } = useParams();
  console.log("Category ID from params:", categoryid); 

  return (
    <div>
      <NavBar/>
      <DynamicContent categoryid={categoryid as string} />
    </div>
  );
};

export default DynamicPage;
