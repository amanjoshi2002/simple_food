

import Image from "next/image";
import NavBar from "./components/NavBar";
import SocialShare from "./components/SocialShare";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SocialShare />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-yellow-400 mt-10">Home</h1>
          <blockquote className="mt-10">
            <p className="text-2xl italic font-semibold text-yellow-400">
              “Welcome to Simple food. Delicious, simple to prepare recipes that celebrate fresh seasonal ingredients, and the joy of cooking and eating.”
            </p>
            <footer className="mt-2 text-yellow-400">— margaret</footer>
          </blockquote>
          <div className="mt-6 text-lg text-yellow-400">
            This month I’m featuring recipes that highlight fruit as a main ingredient. With natural sweetness and beautiful flavours, whatever fruit is in season should be eaten fresh, but also used sensitively to create both sweet and savoury dishes. Here’s a sample of my favourites. Recipe links below.
          </div>
        </div>
      </div>
      <Blog></Blog>

      <Footer/>
    </>
  );
}