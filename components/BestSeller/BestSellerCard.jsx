import Image from 'next/image';

const BestSellerCard = ({ card }) => {
	return (
		<div className="shadow-md">
			<div>
				<Image src={card.img} width={417} height={297} alt="" />
			</div>
			<div className="flex justify-between p-4">
				<h4 className="text-xl ">{card.title}</h4>
				<button className="py-1 px-4 bg-[#f03229] text-white rounded-full">
					Buy Now
				</button>
			</div>
			<div className="flex justify-between px-4 pb-4">
				<div className="flex">
					{new Array(card.ratting).fill(0).map((star) => (
						<Image
							key={crypto.randomUUID()}
							src="/star.svg"
							alt=""
							width={24}
							height={24}
						/>
					))}
				</div>
				<button className="text-xl font-bold">${card.price}</button>
			</div>
		</div>
	);
};
export default BestSellerCard;
