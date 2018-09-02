import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainContent from './components/main-content';
import Footer from './components/footer';
import PageWrapper from './components/page-wrapper';

const App = () => (
  <PageWrapper>
    <MainContent />
    <Footer />
  </PageWrapper>
);

export default App;
