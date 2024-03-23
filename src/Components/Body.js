import React, { useState } from 'react';
import headPhone from '../resources/assets/home/mobile/image-category-page-preview.png';
import speaker from '../resources/assets/home/mobile/image-speaker-zx9.png';
import smallearphone from '../resources/assets/home/mobile/image-category-page.png'
import shopicon from '../Images/shop.png'
import halfSpeaker from '../resources/assets/home/mobile/image-speaker-zx7.jpg'
import earphone from '../resources/assets/home/mobile/image-earphones-yx1.jpg'
import man from '../resources/assets/home/mobile/image-gallery-1.jpg'

function Body() {
    const [items, setItems] = useState([])
    
    const addItems = () => {
        setItems([...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 2
            }
        ])
    }

    // setTimeout(() => {
    //     setItems([...items,
    //         {
    //             id: items.length,
    //             value: Math.floor(Math.random() * 10) + 2
    //         }
    //     ])
    // }, 5000);

  return (
    <div className='w-[90%] mx-auto '>
        <div className=' mt-16 gap-10 sm:flex md:flex lg:flex text-center justify-center'>
            <div className='bg-[#F1F1F1] mb-[4rem] mx-auto h-[8rem] rounded-md'>
            <img src={headPhone} alt='bigEarphone' className='h-14 w-13 mx-auto relative bottom-8 ' />
                <span className='font-bold text-[0.6rem] '>HEADPHONES</span>
                <img src={shopicon} alt='shopicon' className='h-[0.7rem] mx-auto mt-2 ' />
            </div>

            <div className='bg-[#F1F1F1] mx-auto  mb-[4rem] h-[8rem] rounded-md'>
            <img src={speaker} alt='' className='h-11 w-10 mx-auto relative bottom-7 mt-11' />
                <span className='font-bold text-[0.6rem]'>SPEAKERS</span>
                <img src={shopicon} alt='shopicon' className='h-[0.7rem] mx-auto mt-2' />
            </div>

            <div className='bg-[#F1F1F1] mx-auto mb-[4rem] h-[8rem] rounded-md '>
            <img src={smallearphone} alt='' className=' h-13 w-12 mx-auto relative bottom-8 mt-10' />
                <span className='font-bold text-[0.6rem]'>EARPHONES</span>
                <img src={shopicon} alt='shopicon' className='h-[0.7rem] mx-auto mt-2 '/>
            </div>
        </div>

        <div className='bg-[#D87D48] h-50px mt-20 pb-9 rounded-md'>
            <img src={speaker} alt='bigSpeaker' className=' h-[6-rem] w-[5rem] mx-auto pt-8' />

            <div className='text-[#FFFFFF] font-semibold text-center mt-4'>
            <span>ZX9</span>< br/>
            <span>SPEAKER</span>
            </div>

            <p className='text-[#F2F2F2] mx-4 mt-3 font-thin text-[0.6rem] text-center'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>

            <div className='bg-[#000000] mx-auto mt-8 pt-3 text-[#FFFFFF] text-[0.5rem] font-thin w-[6rem] h-[2rem]'>
                <button className='pl-6 '>SEE PRODUCT</button>
            </div>
        </div>

    
            <div>
                <div className=' relative left-[4rem] top-[9rem]'>
                    <span className='font-bold '>ZX7 SPEAKER</span> <br />
                    <button className='text-[0.6rem] font-bold border border-black mt-4 py-2 px-4'>SEE PRODUCT</button>
                </div >
                <img src={halfSpeaker} alt='halfSpeaker' className='rounded-md mt-5'/>

                <img src={earphone} alt='earphone' className='rounded-md mt-5'/>
            </div>

                
            <div className='bg-[#F1F1F1] h-[11rem] pt-7 rounded-md pl-6 mt-5 '>
                <span className='font-semibold text-3xl tracking-[1px] '>YX1 EARPHONES</span> <br />
                <button className='border border-black mt-3 py-2 px-5 font-bold text-sm'>SEE PRODUCT</button>
                <img src={man} alt='man' className='mt-[7rem] mx-auto rounded-md ' />
            </div>
    

            <div className=' mt-[15rem] text-center '>
                    <span className='text-3xl font-semibold'>BRINGING YOU THE</span> 
                    <span className='text-[#D87D4A] text-3xl font-semibold'> BEST </span> 
                    <span className='text-3xl font-semibold'>AUDIO GEAR</span>
                    <p className=' mx-auto mt-[2rem] mb-[4rem] text-xs'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>                
            </div>
        <div>
            <button onClick={addItems}>CLICK</button>
            <div>{items.map(item => <li key={item.id}>{item.value}</li>)}</div>
            
        </div>
    </div>
  )
}

export default Body