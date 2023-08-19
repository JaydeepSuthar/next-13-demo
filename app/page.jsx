import Image from "next/image";

function Loader() {
	return (
		<>
			<div className="loader">
				<Image
					src={"/vercel.svg"}
					height={100}
					width={100}
					alt="NextJS Logo"
				/>
			</div>
		</>
	);
}

export default function Home({ searchParams }) {
	const { loading = null } = searchParams;

	return <div>{loading == "true" ? <Loader /> : "Content"}</div>;
}
