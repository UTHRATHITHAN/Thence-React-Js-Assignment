import React, { useState } from 'react';
import Button from '../../components/Button/Button'
import emailValidate from '../../utils/emailValidate';
import Input from '../../components/Input/Input';
import EmailError from './EmailError';

type Props = {
    handleSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Form({ handleSuccess }: Props) {

    const [emailError, setEmailError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    function submit() {
        const email = formData.email
        if (emailValidate(email)) {
            setEmailError(false)
            handleSuccess(true)
        } else {
            setEmailError(true);
        }
    }

    return (
        <div className='text-center flex-col flex justify-center items-center mt-32 lg:mt-36'>
            <p className='mb-3 font-normal text-3xl text-[#2DA950] font-grace'>Registration form</p>
            <p className='mb-10 md:w-[550px] text-4xl md:text-5xl lg:text-6xl  font-semibold'>Start your success Journey here!</p>

            <div className='mt-[16px] flex flex-col gap-y-[5px] '>
                <div className='flex flex-col gap-y-[25px]'>
                    <Input
                        type="text"
                        name='username'
                        placeholder='Enter your name'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })} className={'number'}
                    />
                    <Input
                        type="text"
                        name='email'
                        placeholder='Enter your name'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                {emailError && <EmailError />}
            </div>

            <Button
                disabled={!formData.name || !formData.email}
                className={`mt-14 rounded-[40px]  h-[75px] w-[320px] md:w-[417px] pl-6 text-[#FFFFFF] cursor-not-allowed ${formData.name && formData.email ? 'bg-[#1C1C1C] hover:bg-[#4E4E4E] cursor-pointer' : ' bg-[#C9C9C9]'} `}
                onClick={submit}
            >
                Submit
            </Button>

        </div>
    )
}
