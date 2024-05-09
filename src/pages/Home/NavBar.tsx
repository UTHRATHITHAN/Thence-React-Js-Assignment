
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { logo } from '../../assets/ImageImport'
import Button from '../../components/Button/Button';

type Props = {
    isMenuOpen: boolean,
    handleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function NavBar({isMenuOpen,handleMenuOpen} : Props ) {
    const navigate = useNavigate();
    
    return (
        <nav className='border border-zinc-300 rounded-[50px] lg:h-24 md:h-20 h-14 mt-4 mx-4 px-6 flex items-center justify-between '>
            <img
                src={logo}
                alt="Logo"
                className='lg:h-10 md:h-8 h-5'
            />
            <div className='flex gap-5'>
                <button className='md:hidden relative z-[30] flex items-center' onClick={() => handleMenuOpen(!isMenuOpen)}>
                    {
                        isMenuOpen ? <RxCross2 className='h-6 w-6 text-black fixed right-10' /> : <RxHamburgerMenu className='h-5 w-5 text-black' />
                    }
                </button>
                <Button className={`hover:bg-[#F1F1F1]  text-black h-16 w-40 border border-[#EAEAEA] hidden md:block`} onClick={() => navigate('/register')}>
                    Get Projects
                </Button>
                <Button className="bg-[#1C1C1C] w-40 hover:bg-[#4E4E4E] hidden md:block">
                    Onboard Talent
                </Button>
            </div>
            {
                isMenuOpen &&

              
                <div className={`  duration-1000  transition-all ease-in-out md:hidden fixed  overscroll-none top-0   left-0 z-20  h-full w-full bg-white  border border-black rounded-lg flex flex-col gap-y-5 justify-center items-center`}>
                    <Button className={`hover:bg-[#F1F1F1]  text-black h-16 w-40 border border-[#EAEAEA]`} onClick={() => navigate('/register')}>
                        Get Projects
                    </Button>
                    <Button className="bg-[#1C1C1C] w-40 hover:bg-[#4E4E4E]">
                        Onboard Talent
                    </Button>
                </div>
            }
        </nav>
    )
}
