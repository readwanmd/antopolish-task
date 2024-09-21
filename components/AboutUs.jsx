import Image from 'next/image';

const AboutUs = () => {
	return (
		<section className="container flex flex-col md:flex-row gap-10 font-inter my-16">
			<div className="order-last md:order-first">
				<p className="uppercase text-primary">PIZZA DELIVERY</p>
				<h2 className="text-4xl font-bold">Get Started Today!</h2>
				<div className=" my-4 w-3/12 h-1 bg-primary"></div>
				<p className="text-xl font-bold mb-4">
					Everything you need to build an amazing food restaurant responsive
					website.
				</p>

				<p>
					Hendrerit in vulputate velit esse molestie consequat, vel illum dolore
					eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
					dignissim qui blandit praesent luptatum zzril delenit augue duis.
				</p>

				<div className="cards flex my-8 gap-4">
					{[
						{
							title: 'Food Order',
							text: 'Food is the necessity of life. It provides nutrition, sustenance	growth to human body.',
						},
						{
							title: 'Promote Restaurant',
							text: 'Food can be classified into cereals, pulses, nuts and oilseeds, vegetable.',
						},
					].map((card) => (
						<div
							key={crypto.randomUUID()}
							className="card shadow-md p-2 md:shadow-none"
						>
							<Image
								className="w-12"
								src="/icon1.png"
								alt=""
								height={28}
								width={28}
							/>
							<p className="text-xl font-bold mt-4 mb-2">{card.title}</p>
							<p>{card.text}</p>
						</div>
					))}
				</div>
			</div>

			<div className=" order-1 md:order-2">
				<div className="font-miniver flex items-center gap-2">
					About us <div className="w-16 h-[2px] bg-primary"></div>
				</div>
				<h4 className="text-4xl font-bold py-4">
					Food is an important <br />
					part Of a balanced Diet
				</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
					pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
					augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
					vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
				</p>

				<div className="flex gap-4 my-8">
					<button className="py-2 px-6 bg-primary text-white">Show more</button>
					<button className="flex items-center gap-2 font-bold">
						<span>
							<Image
								className="bg-primary h-10 w-10 p-3 rounded-full"
								src="/icon2.png"
								alt=""
								width={28}
								height={28}
							/>
						</span>{' '}
						Watch video
					</button>
				</div>
			</div>
		</section>
	);
};
export default AboutUs;
