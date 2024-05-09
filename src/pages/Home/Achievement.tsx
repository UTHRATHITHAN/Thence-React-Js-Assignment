
import {  spark, rocket } from '../../assets/ImageImport'

// Three box nearer to the image
function ReducedClientExpenses() {
    return (
        <section className='md:absolute  md:-bottom-12 md:-right-16 z-10
        xl:-bottom-[50px] xl:-right-[70px]  xl:w-[290px] xl:p-6  xl:gap-y-5
        lg:-bottom-[70px] lg:-right-[50px] bg-[#002E18]    lg:h-[160px] lg:w-[255px] lg:text-sm lg:font-light lg:gap-y-3
         p-6 lg:p-3 xl:h-[200px]  md:w-[300px] w-full  px-6 md:h-[220px] h-[230px]  rounded-[30px] flex flex-col gap-y-5'>
            <p><span className='font-medium text-6xl lg:text-5xl xl:text-6xl text-white'>  $0.5</span> <span className='text-[#A6A3A0] text-2xl '> Millions </span> </p>
            <p className='text-lg lg:text-base xl:text-lg font-medium text-[#CCCCCC] w-[250px]'>Reduced client expenses by saving on hiring and employee costs.</p>
        </section>
    )
}

function TeamAvailability() {
    return (
        <section className='md:absolute   md:-left-24 md:top-24  xl:top-24 xl:-left-24 2xl:left-0 lg:top-16 lg:-left-[120px] lg:w-[240px] lg:h-[190px] lg:text-2xl lg:pt-3 text-start bg-white   xl:w-[250px] xl:h-[220px]  md:w-[280px] h-[230px] w-full  md:h-[230px] rounded-[30px] flex items-start justify-center flex-col  gap-y-3 border border-zinc-300 shadow-lg'>
            <p className='font-medium  text-5xl  lg:text-4xl ml-7'>40%</p>
            <p className='text-[#828282] text-lg  lg:text-base xl:text-lg font-manrope text-wrap lg:w-[200px]  ml-7'>Achieved reduction in project execution time by optimising team availability</p>
            <img
                src={spark}
                alt="Spark"
                className=' hidden md:block absolute -top-4 -left-2 lg:-top-4 xl:-top-6 -rotate-30' />
        </section>
    )
}

function StaffDeployment() {
    return (
        <section className='md:absolute md:bottom-10 md:-left-10  xl:-left-12 xl:bottom-[40px] 2xl:left-10 lg:-left-[50px] lg:bottom-[40px]  bg-white md:rounded-[50px] rounded-[30px] md:w-[230px]  w-full md:h-20 h-[130px] lg:h-[80px]  px-3 flex items-center gap-x-4 border border-zinc-300 justify-center md:justify-start shadow-lg'>
            <div className='bg-[#DDEFE0] rounded-[50px] h-14 w-14 flex items-center justify-center'>
                <img
                    src={rocket}
                    alt="Rocket-vector"
                    className='h-6  right-0'
                />
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold text-lg lg:text-md xl:text-lg'>10 Days</p>
                <p className='text-[#828282] lg:text-base lg:font-medium'>Staff Deployment</p>
            </div>
        </section>
    )
}

export {ReducedClientExpenses, StaffDeployment, TeamAvailability}