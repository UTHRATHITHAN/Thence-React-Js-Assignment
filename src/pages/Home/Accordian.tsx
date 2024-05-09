import { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import questions from '../../data/AccordianData'

export default function Accordian() {
    const [index, setIndex] = useState<null | number>(null);

    function handleOpenQuestion(i:number) {
        if (index !== i) setIndex(i)
        else setIndex(null)
    }

    return (
        <section className='lg:w-6/12  lg:pb-4 w-full divide-y-2 divide-[#D7D7D7] divide-y divide-solid lg:min-h-[750px] lg:pt-28 px-4 '>
            {
                questions.map((ele, i) =>
                    <div className='flex flex-col pt-5 pb-10' key={i}>
                        <div className='flex  justify-between items-center gap-8 w-full cursor-pointer' onClick={() => handleOpenQuestion(i)}>
                            <p className='w-10/12 text-start'>{ele.question}</p>
                            {
                                index == i ? <FiMinus className='pr-2 size-7' />   : <FiPlus className='pr-2 size-7' />
                            }
                        
                        </div>
                        {index == i && <div className="text-[#617275] pt-10 py-2 text-start  ">{ele.answer}</div>}
                    </div>
                )
            }
        </section>
    )
}
