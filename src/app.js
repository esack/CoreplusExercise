import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from './components/hero';
import MainContent from './components/main-content';
import Footer from './components/footer';
import PageWrapper from './components/page-wrapper';
import BottomContent from './components/bottom-content';
import Testimonials from './components/testimonials';
import TransparentContent from './components/transparent-content';
import Intro from './components/intro';
import Header from './components/header';

const App = () => (
  <PageWrapper>
    <Header />
    <Hero />
    <MainContent />
    <TransparentContent />
    <Testimonials />
    <BottomContent />
    <Footer />
    <Intro />
  </PageWrapper>
);

export default App;
