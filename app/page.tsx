import Image from "next/image";
import { LampDemo } from "./components/ui/lamp";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";
import { TextRevealCardPreview } from "./components/TextRevealCardPreview";
import { LayoutGridDemo } from "./components/LayoutGridDemo";
import type { NextPage } from 'next';
import ParentComponent from "./components/collection"
import ActionAreaCard from './components/ActionAreaCard';

import dynamic from 'next/dynamic';
// Dynamically import MySlider with SSR disabled
const MySlider = dynamic(() => import('./components/MySlider'), { ssr: false });


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <LampDemo></LampDemo>
       <div style={{ display: 'flex', alignItems: 'flex-start' }}> 
     <div style={{ marginLeft: '-49px', padding: '40px' }}>
      <TextRevealCardPreview></TextRevealCardPreview>
    </div> 
    <ThreeDCardDemo />
     </div> 
     <LayoutGridDemo/>
     <h1>NEW COLLECTION</h1> 
     <ParentComponent></ParentComponent>
    </main>
  );
}

