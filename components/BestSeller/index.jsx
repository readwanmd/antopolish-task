import BestSellerCard from './BestSellerCard';

const BestSeller = () => {
	const cards = [
		{
			img: '/bs1.png',
			title: 'Breakfast Food',
			ratting: 5,
			price: 230,
		},
		{
			img: '/bs2.png',
			title: 'Health Breakfast',
			ratting: 5,
			price: 230,
		},
		{
			img: '/bs3.png',
			title: 'Breakfast Food',
			ratting: 5,
			price: 230,
		},
		{
			img: '/bs4.png',
			title: 'Breakfast Food',
			ratting: 5,
			price: 230,
		},
		{
			img: '/bs5.png',
			title: 'Breakfast Food',
			ratting: 5,
			price: 230,
		},
		{
			img: '/bs6.png',
			title: 'Breakfast Food',
			ratting: 5,
			price: 230,
		},
	];

	return (
		<div className="container py-8">
			<h2 className="py-8 text-center text-4xl font-bold">
				Our best Seller Dishes
			</h2>
			<p className="text-center mb-8">
				Our fresh garden salad is a light and refreshing option. It features a
				<br />
				mix of crisp lettuce, juicy tomatoe all tossed in your choice of
				dressing.
			</p>

			<div className="cards flex flex-wrap justify-around gap-8">
				{cards.map((card) => (
					<BestSellerCard key={crypto.randomUUID()} card={card} />
				))}
			</div>
		</div>
	);
};
export default BestSeller;
