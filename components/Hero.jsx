'use client';
import Image from 'next/image';
import { useState } from 'react';

const images = ['p1.png', 'p2.png', 'p3.png', 'p4.png'];

const Hero = () => {
	const [active, setActive] = useState(1);
	const rotationDegrees = [-45, -135, -225, -315];

	const backgroundColors = [
		{ primary: '#880808', secondary: '#A52A2A' },
		{ primary: '#0A4669', secondary: '#0A3659' },
		{ primary: '#953553', secondary: '#A95C68' },
		{ primary: '#006666', secondary: '#003333' },
	];

	const handlePrev = () =>
		setActive((prev) => (prev === 1 ? backgroundColors.length : prev - 1));
	const handleNext = () =>
		setActive((prev) => (prev === backgroundColors.length ? 1 : prev + 1));

	const { primary, secondary } = backgroundColors[active - 1];

	return (
		<div className="hero" style={{ background: primary }}>
			<div className="left">
				<div className="circle" style={{ background: secondary }}></div>
				<div className="content">
					<h2>BREAKFAST</h2>
					<p>
						Breakfast, often referred to as the ‘most important meal of the
						day’, provides essential nutrients to kick start our day. It
						includes a variety of foods, like fruits, cereals, dairy products,
						and proteins, that contribute to a balanced diet. Eating a healthy
						breakfast can improve concentration and performance, boost physical
						endurance, and lower cholesterol levels.
					</p>

					<div className="mobile-img">
						<div className="prev" onClick={handlePrev}>
							<Image src="/next.svg" alt="" width={28} height={28} />
						</div>
						<div className="selected-img">
							<Image
								src={`/${images[active - 1]}`}
								alt=""
								width={150}
								height={150}
							/>
						</div>
						<div className="next" onClick={handleNext}>
							<Image src="/next.svg" alt="" width={28} height={28} />
						</div>
					</div>

					<div className="img-select">
						{images.map((src, index) => (
							<div key={index} className="img-wrapper">
								<Image
									src={`/${src}`}
									onClick={() => setActive(index + 1)}
									alt={`${index + 1}`}
									width={100}
									height={100}
									className={active === index + 1 ? 'active' : ''}
								/>
								{active === index + 1 && <div className="img-border"></div>}
							</div>
						))}
					</div>

					<div className="search">
						<Image src="/search.png" alt="" width={28} height={28} />
						<input type="search" placeholder="Search..." />
					</div>
				</div>
			</div>

			<div className="right">
				<div className="circle" style={{ background: secondary }}></div>
				<div
					className="image-container"
					style={{
						transform: `rotate(${rotationDegrees[active - 1]}deg)`,
					}}
				>
					{images.map((src, index) => (
						<div key={index}>
							<Image
								src={`/${src}`}
								alt={`right-img-${index + 1}`}
								width={450}
								height={450}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;
