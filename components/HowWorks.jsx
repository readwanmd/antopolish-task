import Image from 'next/image';

const cards = [
	{
		icon: '/icon6.png',
		title: 'Quality Food',
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
	},
	{
		icon: '/icon7.png',
		title: 'Quality Food',
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
	},
	{
		icon: '/icon8.png',
		title: 'Quality Food',
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
	},
	{
		icon: '/icon9.png',
		title: 'Quality Food',
		text: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
	},
];

const HowWorks = () => {
	return (
		<div className="text-center py-8">
			<h4 className="text-4xl font-bold">How does it work</h4>

			<div className="cards flex justify-center flex-wrap gap-2 my-8">
				{cards.map((card) => (
					<div
						key={crypto.randomUUID()}
						className="w-[300px] h-[307px] flex flex-col items-center border border-1-gray-200 p-6 rounded-lg shadow-md"
					>
						<Image src={card.icon} width={100} height={100} alt="" />
						<h3>{card.title}</h3>
						<p>{card.text}</p>

						<button>Learn More</button>
					</div>
				))}
			</div>
		</div>
	);
};
export default HowWorks;
