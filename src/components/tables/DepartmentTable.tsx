import Loader from "../Misc/Loader.tsx";
type DepartmentTableProps = {
	tableStyle?: string
}


export default function Department({ tableStyle }: DepartmentTableProps) {
	return (
		<>
			<section className={`${tableStyle} mt-10 bg-white shadow-lg`}>
				<h1> Department tables ..</h1>
				<Loader />
			</section></>
	)
}