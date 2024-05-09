import { FaArrowRightLong } from "react-icons/fa6";
import { person} from '../../assets/ImageImport'
import BgBoxDesign from './BgBoxDesign'
import Button from "../../components/Button/Button"
import {ReducedClientExpenses, StaffDeployment, TeamAvailability} from './Achievement'
import AutoPlayCarousel from '../Home/AutoPlayCarousel'

export default function Main() {
    return (
        <section className='flex justify-center'>

            <div className='flex justify-center items-center flex-col container pt-14'>
                <p className='font-grace text-4xl font-normal text-[#2DA950] mb-3'>Success stories</p>
                <p className='font-manrope font-semibold lg:text-6xl md:text-4xl text-3xl  w-[350px] md:w-[450px]  lg:w-[700px] text-center'>Every success journey we’ve encountered.</p>

                <div className='w-full  lg:h-[500px]  mt-20 flex gap-x-3  flex-col-reverse  lg:flex-row md:justify-center md:items-center md:h-fit lg:justify-around lg:mt-28 xl:ml-20'>
                    <div className='lg:w-5/12  md:relative flex flex-col lg:flex-row lg:justify-end lg:ml-24   md:mb-6  h-fit justify-center items-center lg:mx-0 gap-y-6 px-6 mt-12 lg:mt-0 md:px-6 xl:ml-0'>
                        <img
                            src={person}
                            alt="Profile Image"
                            className='hidden md:block  md:rounded-[34px]'
                        />
                        <StaffDeployment />
                        <ReducedClientExpenses />
                        <TeamAvailability />
                    </div>


                    <div className=' lg:w-4/12   lg:pt-10 px-6 pr-0 h-fit py-4  md:flex flex-col justify-center md:w-8/12 lg:ml-4 xl:ml-0'>
                        <BgBoxDesign />
                        <div className='group z-50 '>
                           
                            <AutoPlayCarousel/>

                            <div className=' flex gap-x-2 lg:mt-10 mt-6 pl-1 '>
                                <span className='rounded-full bg-[#2DA950] h-2 w-2'></span>
                                <span className='group-hover:bg-[#CAD0CB] rounded-full bg-[#E4E3E3] h-2 w-2'></span>
                                <span className='rounded-full bg-[#E4E3E3] h-2 w-2'></span>
                            </div>
                        </div>

                        <Button className='bg-[#1C1C1C]  hover:bg-[#4E4E4E] z-30 lg:mt-[140px] mt-20 flex items-center gap-x-3 justify-center'>Explore More  <FaArrowRightLong /> </Button>
                    </div>


                </div>
            </div>
        </section>
    )
}

