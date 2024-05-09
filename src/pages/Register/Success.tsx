import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { success } from '../../assets/ImageImport'

export default function Success() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 5000)
    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <section className='grid place-content-center mt-16 md:mt-20  lg:mt-24 '>
      <div className='flex flex-col justify-center items-center text-center h-[360px] pt-32'>
        <img src={success} alt="Success" className='mb-7' />
        <p className='mb-2 font-normal text-3xl text-[#2DA950] font-grace '> Success Submitted</p>
        <p className='mb-5 font-manrope md:w-[550px] md:text-6xl font-semibold text-4xl'>Congratulations!</p>
        <p className=' mb-3 font-manrope  font-medium text-md px-2 md:px-0 w-[350px] md:text-lg text-[#727272] md:w-[480px]' >Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
      </div>
      <div className='absolute md:bottom-20 bottom-20 flex justify-center items-center w-full'>
        <p className='text-center flex justify-bottom text-[#727272]'>Redirecting you to Homepage in <span className='font-medium  text-black'>&nbsp;{timeLeft} Seconds</span></p>
      </div>

    </section>
  )
}
