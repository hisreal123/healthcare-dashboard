import { ImageWrapper } from '../../components/holders/ProfileHeader'
import { Link } from 'react-router-dom'


type PatientExtractProps = {
    patient: any
}

const PatientExtract = ({ patient }: PatientExtractProps) => {
    return (
        <tr key={patient.id} className=' mb-3 bg-green-100 w-full relative '>
            <td className='py-3 pl-3 '>
                <ImageWrapper propsImga={patient.image} />
            </td>
            <td className=''>
                <Link to={`/update/${patient.id}`}>
                    {patient.firstName}
                </Link>
            </td>
            <td>{patient.lastName}</td>
            <td className='hidden lg:table-cell text-center'>{patient.email}</td>
            <td className='hidden lg:table-cell text-center'>{patient.age}</td>
            <td className='text-center'>{patient.bloodGroup}</td>
            <td className='hidden lg:table-cell text-center'>
                <Link to={`/update/${patient.id}`}>
                    Update
                </Link>
            </td>
        </tr>
    )
}

export default PatientExtract
