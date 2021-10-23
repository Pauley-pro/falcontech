import Layout from './shared/layout';
import Slider from '../components/Slider.js';
import Promo from '../components/Promo.js';
import Service from '../components/Service.js';
import Background from '../components/Background.js';
import Counter from '../components/Counter.js';
import FeaturedCollection from './featured-collection/featured-collection';




const HomePage = () => {
  return (
    <>
      <Layout>
        <Slider />
        <Promo />
        <Service />
        <Background />
        <Counter />
        <FeaturedCollection />
      </Layout>
    </>
  );
}

export default HomePage;