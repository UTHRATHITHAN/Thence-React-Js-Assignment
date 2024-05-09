import cn from '../../utils/cn'

type Props = {
    type: 'text' | 'email',
    name: string,
    placeholder: string,
    className?: React.HTMLInputTypeAttribute,
    onChange?: React.FormEventHandler
}

export default function Input({ className, ...props }: Props) {
    return (
        <input className={cn("rounded-[40px] bg-[#EFEFEF] h-[75px] w-[320px] md:w-[417px] pl-6 focus:bg-[#F5F8FF] outline-none focus:border focus:border-[#537FF1]", className)} {...props} />
    )
}
