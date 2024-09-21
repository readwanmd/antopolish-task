import Image from 'next/image';

const cards = [
	{
		icon: '/icon5.png',
		title: 'Convenient and Reliable',
		text: 'Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.',
	},
	{
		icon: '/icon4.png',
		title: 'Variety of Options',
		text: 'From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.',
	},
	{
		icon: '/icon3.png',
		title: 'Eat Burger',
		text: 'Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.',
	},
];

const WhyChooseUs = () => {
	return (
		<div className="container my-8 flex flex-col md:flex-row gap-10">
			<div className="flex-grow">
				<Image
					className="w-full h-full rounded-3xl"
					src={'/choose.jpg'}
					width={600}
					height={600}
					alt=""
				/>
			</div>

			<div className="cards flex flex-col gap-4">
				<p className="text-4xl">Why People Choose us?</p>
				{cards.map((card) => (
					<div
						key={crypto.randomUUID()}
						className="flex gap-6 items-center shadow-md bg-white p-4"
					>
						<div>
							<Image src={card.icon} width={28} height={28} alt="" />
						</div>
						<div>
							<p className="text-xl font-bold pb-2">{card.title}</p>
							<p>{card.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default WhyChooseUs;
