import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import SocialShare from "../components/SocialShare";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
        <SocialShare />
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-yellow-400 mt-10">About Simple Food</h1>
          <blockquote className="mt-10">
            <p className="text-2xl italic font-semibold text-yellow-400">
              “Simple Food is dedicated to delicious, easy-to-prepare recipes that celebrate fresh, seasonal ingredients and the joy of cooking and eating.”
            </p>
            <footer className="mt-2 text-yellow-400">— Margaret</footer>
          </blockquote>
          <div className="mt-6 text-lg text-yellow-400">
            At Simple Food, we believe that cooking should be enjoyable and accessible to everyone. Our recipes are designed to be simple yet flavorful, with a focus on using fresh, seasonal ingredients. Whether you're a seasoned cook or just starting out, we hope to inspire you with our delicious creations.
          </div>
          <Image 
            src="/photos/about.jpg" 
            alt="Cooking Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg mt-8 mx-auto"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
