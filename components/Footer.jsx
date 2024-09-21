import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	const socialMediaIcons = [
		{ src: '/pinterest.png', alt: 'Pinterest', width: 24, height: 24 },
		{ src: '/twitter.png', alt: 'Twitter', width: 24, height: 24 },
		{ src: '/facebook.png', alt: 'Facebook', width: 24, height: 24 },
		{ src: '/instagram.png', alt: 'Instagram', width: 24, height: 24 },
		{ src: '/youtube.png', alt: 'YouTube', width: 24, height: 24 },
	];

	const contactDetails = [
		{
			src: '/icon14.png',
			alt: 'Location',
			text: '3517 W. Gray St. Utica, Pennsylvania 57867',
		},
		{ src: '/icon15.png', alt: 'Phone', text: '(480) 555-0103' },
		{ src: '/icon16.png', alt: 'Email', text: 'M.Alyaqout@4house.Co' },
		{
			src: '/icon17.png',
			alt: 'Hours',
			text: 'Sun - Sat / 10:00 AM - 8:00 PM',
		},
	];

	const footerLinks = [
		{ href: '#', text: 'About Us' },
		{ href: '#', text: 'Contact Us' },
		{ href: '#', text: 'Our Menu' },
		{ href: '#', text: 'Team' },
		{ href: '#', text: 'Faq' },
	];

	const instagramImages = [
		{ src: '/ig1.png', alt: 'Instagram Image 1' },
		{ src: '/ig2.png', alt: 'Instagram Image 2' },
		{ src: '/ig3.png', alt: 'Instagram Image 3' },
		{ src: '/ig4.png', alt: 'Instagram Image 4' },
		{ src: '/ig5.png', alt: 'Instagram Image 5' },
		{ src: '/ig6.png', alt: 'Instagram Image 6' },
	];

	return (
		<>
			<footer className="bg-primary text-white py-16">
				<div className="container flex flex-wrap justify-between">
					<section className="max-md:py-4">
						<h3 className="text-3xl font-bold">RESTAURANT</h3>
						<p className="py-3">
							Subscribe to our newsletter and <br /> get a 25% discount.
						</p>

						<div className="flex items-center">
							<input
								type="email"
								placeholder="Enter your email"
								className="outline-none border-none py-1 px-2"
							/>
							<button className="bg-[#a42a2b] h-8 px-2">
								<Image src="/icon13.png" alt="" width={19} height={19} />
							</button>
						</div>
						<div className="flex gap-2 py-4">
							{socialMediaIcons.map((icon, index) => (
								<Image
									key={index}
									src={icon.src}
									alt={icon.alt}
									width={icon.width}
									height={icon.height}
								/>
							))}
						</div>
					</section>

					<section className="max-md:py-4">
						<h4 className="text-xl font-bold pb-2">Contact Us</h4>
						{contactDetails.map((detail, index) => (
							<p key={index} className="flex gap-2 py-1">
								<Image
									src={detail.src}
									alt={detail.alt}
									width={24}
									height={24}
								/>
								{detail.text}
							</p>
						))}
					</section>

					<section className="max-md:py-4">
						<h4 className="text-xl font-bold pb-2">Links</h4>

						<div className="flex flex-col gap-2">
							{footerLinks.map((link, index) => (
								<Link key={index} href={link.href}>
									{link.text}
								</Link>
							))}
						</div>
					</section>

					<section className="max-md:hidden">
						<h4 className="text-xl font-bold pb-2">Instagram Gallery</h4>
						<div className="grid grid-cols-3 gap-0">
							{instagramImages.map((image, index) => (
								<Image
									key={index}
									src={image.src}
									alt={image.alt}
									width={109}
									height={108}
								/>
							))}
						</div>
					</section>
				</div>
			</footer>

			<div className="max-md:hidden container py-3 bg-[#a42a2b] text-white flex justify-between">
				<p>Copyright © 2024. All rights reserved</p>
				<div className="flex gap-6">
					<p>Privacy Policy</p>
					<p>Term of Use</p>
					<p>Partner</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
