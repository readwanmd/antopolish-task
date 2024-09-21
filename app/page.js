import AboutUs from '@/components/AboutUs';
import BestSeller from '@/components/BestSeller';
import NewsAndBlog from '@/components/BestSeller/NewsAndBlog';
import Clients from '@/components/Clients';
import CustomerFeedback from '@/components/CustomerFeedback';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowWorks from '@/components/HowWorks';
import NavBar from '@/components/NavBar';
import OurTeam from '@/components/OurTeam';
import WhyChooseUs from '@/components/WhyChooseUs';

const page = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<AboutUs />
			<WhyChooseUs />
			<BestSeller />
			<CustomerFeedback />
			<OurTeam />
			<HowWorks />
			<NewsAndBlog />
			<Clients />
			<Footer />
		</div>
	);
};
export default page;
