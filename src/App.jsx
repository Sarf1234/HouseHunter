import { Link, Routes, Route } from 'react-router-dom'
import Heropage from './Heropage'
import Navbar from './navbar'
import Recommendation from './Recommendation'
import ReadytoSell from './ReadytoSell'
import Subscribe from './Subscribe'
import Footer from './Footer'

function App() {
   return(
    <div>
      <Heropage />
      <Recommendation />
      <ReadytoSell />
      <Subscribe />
      <Footer />
    </div>
   )
}

export default App
