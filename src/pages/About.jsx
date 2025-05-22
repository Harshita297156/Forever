import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
     <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>       
     </div>
     <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever is more than just a clothing brand — it's a statement of timeless style and fearless individuality. Designed for those who dare to stand out and stay true to themselves, Forever blends classic aesthetics with modern edge. Every piece is crafted with care, representing confidence, comfort, and a bold spirit that never fades.</p>
        <p>At Forever, we believe fashion should empower you — whether you're chasing dreams, breaking norms, or simply living your truth. From streetwear staples to elevated essentials, our collections are designed to last, inspire, and express who you are. Be bold. Be timeless. Be Forever.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Forever, our mission is to redefine fashion with purpose — creating timeless clothing that inspires confidence, self-expression, and individuality. We are committed to designing quality pieces that not only reflect the spirit of the present but also stand the test of time. We believe fashion should be inclusive, empowering, and bold. That’s why we aim to build a community where everyone feels seen, celebrated, and unstoppable. From concept to creation, every stitch tells a story  your story.</p>
        </div>
     </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>quality Assurance:</b>
           <p className='text-gray-600'>We meticulously select nd vet each product to ensure it meets our stringent standard</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience:</b>
           <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process , shopping . </p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer Service:</b>
           <p  className='text-gray-600'>Our team of dedicated professionals is here to assists you the way, ensuring   </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
