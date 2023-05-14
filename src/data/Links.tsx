import { GiStethoscope, GiPerson, GiNurseMale } from 'react-icons/gi'
import { FaWheelchair } from 'react-icons/fa'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'


type Class = {
    id: number,
    icon: any,
    name: string,
    link: string
}


export const list: Class[] = [
    {
        id: 1,
        icon: <GiStethoscope />,
        name: 'Appointment',
        link: 'appointment',
    },
    {
        id: 2,
        icon: <GiPerson />,
        name: 'Doctor',
        link: 'doctor',
    },
    {
        id: 3,
        icon: <GiNurseMale />,
        name: 'Department',
        link: 'department',
    },
    {
        id: 4,
        icon: <FaWheelchair />,
        name: 'Patient',
        link: 'patient',
    },
    {
        id: 5,
        icon: <AiOutlineCreditCard />,
        name: 'Payment',
        link: 'payment',
    },
    {
        id: 6,
        icon: <BiHelpCircle />,
        name: 'Help',
        link: 'help',
    },
]
