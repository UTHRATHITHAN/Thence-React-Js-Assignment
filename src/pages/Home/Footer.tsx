import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='flex justify-between items-center bg-[#F5F5F5]  text-black rounded-[20px] md:h-20 h-fit   lg:mx-6 mt-14 lg:mt-20 md:mb-6 font-normal lg:text-lg text-sm md:px-12 px-8 py-10 lg:py-0 flex-col md:flex-row gap-y-4 lg:gap-y-0'>
            <div className='flex  items-center gap-x-3'>
              
               <FaRegCopyright  className='h-4 w-4 text-[#1C1C1C]'/>
                <p>Talup 2023. All rights reserved</p>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-x-8 gap-y-4 lg:gap-y-0'>
                <p className='underline cursor-pointer'>Terms & Conditions</p>
                <p className='underline cursor-pointer'>Privacy Policy</p>
            </div>
        </footer>
    )
}
