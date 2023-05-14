// import React from 'react'


import DepartmentTable from "../components/tables/DepartmentTable";

export default function Department() {
    return (
        <>
            <section
                className="  px-2 lg:px-10 w-full relative flex flex-col ">
                <main className="div mt-10">
                    <h1 className='lg:text-3xl'> Department</h1>

                    <DepartmentTable />
                </main>
            </section>
        </>
    )
}
