
import { PiWarningCircleFill } from "react-icons/pi";

export default function EmailError() {
    return (
        <div className='text-start items-center'>
            <p className='text-[#FF0808] font-manrope flex gap-x-2 items-center font-medium'>
                <PiWarningCircleFill />
                Enter a valid email
            </p>
        </div>
    )
}
