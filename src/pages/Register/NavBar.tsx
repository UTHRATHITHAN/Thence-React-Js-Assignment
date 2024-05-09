import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { logo } from '../../assets/ImageImport'

type Props = {
    showSuccess: boolean
}

export default function NavBar({ showSuccess }: Props) {
    const navigate = useNavigate();
    return (
        <nav className='absolute top-0 w-full flex justify-between items-center px-3 lg:px-20  mt-5 z-[20] '>
            <img src={logo} className='h-10 md:h-12 lg:h-14 ' />
            {
                showSuccess || <button onClick={() => navigate('/')}>
                    <div className='rounded-full size-10 md:size-12 lg:size-14  border border-zinc-300 grid place-content-center p-2 hover:cursor-pointer'>
                        <RxCross2 className='h-5 w-5' />

                    </div>
                </button>
            }
        </nav>
    )
}
