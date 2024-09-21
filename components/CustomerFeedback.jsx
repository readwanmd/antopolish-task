import Image from 'next/image';

const CustomerFeedback = () => {
	return (
		<div className="container flex flex-col md:flex-row gap-16 pt-8">
			<div className="flex flex-col justify-center">
				<h2 className="text-4xl font-bold">
					Customer <span className="text-[#ac1518]">Feedback</span>
				</h2>
				<p className="my-4">
					I recently dined at your restaurant and wanted to share my experience.
					The food was absolutely delicious, and I was impressed by the
					freshness of the ingredients. Each dish was bursting with flavor, and
					the portion sizes were perfect. The service was quick and efficient,
					and the staff was incredibly friendly and welcoming.
				</p>

				<div className="flex gap-4 items-center">
					<Image src="/Picture13.png" alt="" width={74} height={74} />
					<div>
						<h4 className="text-xl font-bold">Tayyab Sohail</h4>
						<p>UX/UI Designer</p>
					</div>
				</div>
			</div>
			<Image
				className=""
				src="/Picture15.png"
				alt=""
				width={590}
				height={590}
			/>
		</div>
	);
};
export default CustomerFeedback;
