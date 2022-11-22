
import './App.css';
import BanerSlider from './component/BanerSlider/BanerSlider';
import Content from './component/content/Content';
import Footer from './component/Footer/Footer';
import Menu from './component/Menu/menu';


function App() {

  return (
    <div>
      <Menu/>
      <BanerSlider/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
