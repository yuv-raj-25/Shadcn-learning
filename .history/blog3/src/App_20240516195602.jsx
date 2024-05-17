import { useState } from 'react'
import './App.css'
import ShadcnButton from './components/Button.jsx/ShadcnButton'
import ShadcnInput from './components/input/ShadcnInput'
import ShadcnCard from './components/card/ShadcnCard'
import MyForm from './components/myform/MyForm'
import { CarouselDemo } from './components/demo/ CarouselDemo'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import { Card } from './components/ui/card'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import { ThemeProvider } from ""

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    alert(`Button clicked! Input value: ${inputValue}`);
  };
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <div className=' grid grid-cols-1 justify-content-center'>
    <div className=' flex items-center justify-center'>

    <Login/>
    </div>
    </div>

    <Button>click me</Button>
    </ThemeProvider>

    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <div className="App">
      
      <ShadcnCard title="Demo Card">
        <ShadcnInput
          placeholder="Type something..."
          onChange={handleInputChange}
        />
        <ShadcnButton onClick={handleClick}>Click Me</ShadcnButton>
      </ShadcnCard>

      <CarouselDemo onClick={handleClick}></CarouselDemo>
       <MyForm/>
    </div> */}
    </>
  );
}

export default App;

