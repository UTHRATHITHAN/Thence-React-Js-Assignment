import { union } from '../../assets/ImageImport'
import Accordian from './Accordian';

export default function Question() {
    return (
        <section className=' mt-20 lg:mt-36 md:pt-10  flex flex-col lg:flex-row justify-between items-center bg-[#E8EEE7]  text-black rounded-[20px] lg:min-h-[700px] md:h-fit md:px-6 lg:px-0   lg:mx-6  lg:mt-20 font-normal text-lg lg:px-10  xl:pr-20 text-center md:mt-32 pt-10 py-8'>
            <div className='lg:relative  '>
                <div className=' lg:pb-[460px] pb-[70px] gap-y-3 flex flex-col md:gap text-start lg:pl-24 pl-4'>
                    <p className='font-grace text-3xl font-normal text-[#9E9D9D] '>What’s on your mind</p>
                    <p className='font-semibold text-6xl'>Ask Questions</p>
                </div>
                <img src={union} alt="Question" className='h-[500px] lg:h-[500px] absolute -left-[0px] -bottom-[100px] hidden lg:block' />
            </div>
            <Accordian />
        </section>
    )
}


