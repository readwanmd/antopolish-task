import Image from 'next/image';

const Clients = () => {
	return (
		<div className="container py-8">
			<p className="font-miniver text-primary text-center">
				Partners & Clients
			</p>
			<h4 className="text-4xl font-bold text-center">
				We work with the best pepole
			</h4>

			<div className="flex gap-2 justify-start md:justify-center py-16 overflow-scroll md:overflow-hidden">
				<Image src="/bi1.png" alt="" height={128} width={239} />
				<Image src="/bi2.png" alt="" height={128} width={168} />
				<Image src="/bi3.png" alt="" height={128} width={145} />
				<Image src="/bi4.png" alt="" height={128} width={129} />
				<Image src="/bi5.png" alt="" height={128} width={168} />
				<Image src="/bi6.png" alt="" height={128} width={113} />
			</div>
		</div>
	);
};
export default Clients;
