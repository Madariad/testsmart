import MainComponents from "./components/MainComponents/MainComponents";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const theme = createTheme({

});
function App() {
 
  return (
    <>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponents />}/>
          <Route path="/test" element={<Footer />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
