import Allcategories from '../components/shared/Allcategories';
import DownloadSection from '../components/shared/DownloadSection';
import FeatureCard from '../components/shared/FeatureCard';
import Hero from '../components/shared/Hero';
import NewsletterSection from '../components/shared/NewsletterSection';
import PopularProducts from '../components/shared/PopularProducts';

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <FeatureCard></FeatureCard>
      <Allcategories></Allcategories>
      <PopularProducts></PopularProducts>
      <DownloadSection></DownloadSection>
      <NewsletterSection></NewsletterSection>
    </>
  );
};

export default Home;
