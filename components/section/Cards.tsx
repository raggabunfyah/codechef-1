
import {ThreeDCardDemo} from '@/components/Three';
import {EvervaultCardDemo} from '@/components/Vault';
import Iletisim from '@/components/Iletisim';

import { Caveat } from "next/font/google";


const caveat = Caveat({ subsets: ["latin"] });


  export default function Cards() {
    return (
      <>
      <div className='flex flex-col items-center justify-center'>
        {/* First Row: Card - Text */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-1 mb-12'>
          <div className='md:basis-1/2 w-full'>
            <ThreeDCardDemo />
          </div>
          <div className='md:basis-1/2 w-full text-end md:text-end md:pr-5'>
            <h1 className={`bg-gradient-to-br from-gray-100 to-gray-300 py-4 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl md:pr-2 ${caveat.className}`}>Farklı</h1>
            <p className='text-white font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quibusdam...
            </p>
          </div>
        </div>
    
        {/* Second Row: Text - Card */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-12'>
          <div className='md:basis-1/2 w-full md:order-last'>
            <EvervaultCardDemo />
          </div>
          <div className='md:basis-1/2 w-full'>
            <h1 className={`bg-gradient-to-br from-gray-100 to-gray-300 py-4 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl ${caveat.className}`}>Güvenli</h1>
            <p className='text-white font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quibusdam...
            </p>
          </div>
        </div>
    

        <div className='relative m-12 p-12'>
        <Iletisim/>
        </div>
      </div>
    </>
    

    );
  }
  

