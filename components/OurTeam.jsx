import Image from 'next/image';

const OurTeam = () => {
	const team = [
		{ name: 'Mark Henry', designation: 'Owner' },
		{ name: 'Lucky Halen', designation: 'Chef' },
		{ name: 'Moon Henry', designation: 'Founder' },
		{ name: 'Tom Monrow', designation: 'Specialist' },
	];

	return (
		<div className="mb-8">
			<div
				className="h-80 w-full bg-no-repeat bg-center bg-cover text-center flex flex-col justify-center text-white"
				style={{
					background:
						"linear-gradient(0deg, rgba(173, 21, 25, 0.85), rgba(173, 21, 25, 0.85)), url('/Picture16.png')",
				}}
			>
				<h4 className="text-4xl font-bold py-4">Team Member</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					<br />
					Varius sed pharetra dictum neque massa congue
				</p>
			</div>

			<div className="flex flex-wrap gap-4 justify-center  -mt-[4rem]">
				{team.map((member) => (
					<div key={crypto.randomUUID()} className="text-center">
						<Image src={'/Picture17.png'} width={150} height={150} alt="" />
						<h4 className="text-md font-bold">{member.name}</h4>
						<p>{member.designation}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default OurTeam;
