import Image from "next/image";
import { LampDemo } from "./components/ui/lamp";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";
import { TextRevealCardPreview } from "./components/TextRevealCardPreview";
import { LayoutGridDemo } from "./components/LayoutGridDemo";
import type { NextPage } from 'next';
import ParentComponent from "./components/collection";
import ActionAreaCard from './components/ActionAreaCard';

import dynamic from 'next/dynamic';
// Dynamically import MySlider with SSR disabled
const MySlider = dynamic(() => import('./components/MySlider'), { ssr: false });

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <LampDemo />
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto">
        <div className="flex-1 p-4">
          <TextRevealCardPreview />
        </div>
        <div className="flex-1 p-4">
          <ThreeDCardDemo />
        </div>
      </div>
      <LayoutGridDemo />
      <h1 className="text-center mt-8 text-2xl md:text-4xl">NEW COLLECTION</h1>
      <ParentComponent />
    </main>
  );
}

export default Home;
