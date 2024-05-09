
import { PiWarningCircleFill } from "react-icons/pi";

export default function EmailError() {
    return (
        <div className='text-start items-center pl-2'>
            <p className='text-[#FF0808] font-manrope flex  items-center font-medium'>
                <PiWarningCircleFill />
                Enter a valid email
            </p>
        </div>
    )
}
