import Image from 'next/image';

const NewsAndBlog = () => {
	const cards = [
		{
			date: '02 Jan 2022',
			comments: 3,
			title: 'Chocolate Truffle Cake With Honey Flavor',
			desc: 'Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.',
		},
		{
			date: '02 Jan 2022',
			comments: 3,
			title: 'Chocolate Truffle Cake With Honey Flavor',
			desc: 'Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.',
		},
		{
			date: '02 Jan 2022',
			comments: 3,
			title: 'Chocolate Truffle Cake With Honey Flavor',
			desc: 'Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.',
		},
	];
	return (
		<div className="container py8 bg-gray-50">
			<h4 className="text-4xl font-bold text-center">Latest news & Blog</h4>
			<p className="text-center py-2">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed{' '}
				<br />
				pharetra dictum neque massa congue
			</p>

			<div className="cards py-6 flex flex-wrap gap-8 justify-center">
				{cards.map((card) => (
					<div
						key={crypto.randomUUID()}
						className=" w-[350px] bg-white shadow-md"
					>
						<Image src="/Picture22.png" alt="" width={350} height={250} />
						<div className="flex justify-between px-4">
							<div className="flex gap-2 py-4">
								<Image src="/icon11.png" alt="" width={24} height={24} />
								{card.date}
							</div>
							<div className="flex gap-2 py-4">
								<Image src="/icon10.png" alt="" width={24} height={24} />
								Comments ({card.comments})
							</div>
						</div>

						<h3 className="text-xl font-bold mb-2 px-4">{card.title}</h3>
						<p className="px-4">{card.desc}</p>

						<button className="flex gap-2 py-4 px-4 text-gray-700">
							Read More{' '}
							<Image src="/icon12.png" alt="" width={24} height={24} />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
export default NewsAndBlog;
