import Image from "next/image";

export default function Loading() {
	return (
		<>
			<Image
				src={"/next.svg"}
				height={100}
				width={100}
				alt="NextJS Logo"
			/>
		</>
	);
}
