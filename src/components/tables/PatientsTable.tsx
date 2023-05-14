import React from 'react';
import { useSelector } from 'react-redux';
import { Person } from '../../../typings';
import { selectAllPatient, getPatientStatus } from '../../redux/slices/Patient';
import PatientExtract from '../../views/Patient/PatientExtract';
import Loader from '../../components/Misc/Loader';

type PatientTableProps = {
    patientStyle?: React.CSSProperties;
};

export default function PatientTable({ patientStyle }: PatientTableProps) {
    // @ts-ignore
    const patients = useSelector(selectAllPatient) as Person[];
    const status = useSelector(getPatientStatus);

    let patientContent;
    if (status === 'succeeded') {
        patientContent = patients.map((patient) => (
            <PatientExtract key={patient.id} patient={patient} />
        ));
    } else if (status === 'failed') {
        patientContent = <h1>Error loading patients from server.</h1>;
    }

    return (
        <section className={`${patientStyle} mt-10 bg-white shadow-lg relative`}>
            <table className="table table-auto relative w-full">
                <thead className="table-header-group rounded-t-lg">
                <tr className="table-row bg-gray-400">
                    <th className="py-3"></th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th className="hidden lg:table-cell">Email</th>
                    <th className="hidden lg:table-cell">Gender</th>
                    <th className="text-center">BloodGroup</th>
                    <th className="hidden lg:table-cell">Action</th>
                </tr>
                </thead>
                <tbody className="relative space-y-2">
                {status === 'loading' ? <Loader /> : patientContent}
                </tbody>
            </table>
        </section>
    );
}
