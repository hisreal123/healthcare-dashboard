import { Home, BarChart2 } from 'react-feather';
import { GiStethoscope, GiPerson, GiNurseMale } from 'react-icons/gi'
import { FaWheelchair } from 'react-icons/fa'
import { AiOutlineCreditCard, AiOutlinePieChart } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'


type Class  = {
    id: number,
    icon: any,
    name:  string,
    link: 
}
export const list = [
    {
        id: 1,
        icon: <AiOutlinePieChart />,
        name: 'Dashboard',
        link: './dashboard',
    },
    {
        id: 2,
        icon: <GiStethoscope />,
        name: 'Appointment',
        link: './Appointment',
    },
    {
        id: 3,
        icon: <GiPerson />,
        name: 'Doctor',
        link: './doctor',
    },
    {
        id: 4,
        icon: <GiNurseMale />,
        name: 'Department',
        link: './department',
    },
    {
        id: 5,
        icon: <FaWheelchair />,
        name: 'Patient',
        link: './patient',
    },
    {
        id: 6,
        icon: <AiOutlineCreditCard />,
        name: 'Payment',
        link: './payment',
    },
    {
        id: 7,
        icon: <BiHelpCircle />,
        name: 'Help',
        link: './help',
    },
]
