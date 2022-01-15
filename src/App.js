import './App.css';
import { CTA, Navbar, Brand, Feature } from './components'
import About from './components/about/About';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
function App() {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
         <Brand></Brand>
         <About />
         <Feature></Feature>
         <CTA></CTA>
         <Blog></Blog>
         <Footer></Footer>

    </div>
  );
}

export default App;
