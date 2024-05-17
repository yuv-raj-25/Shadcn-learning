import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Carousel } from './components/ui/carousel'
import { CarouselDemo } from './components/demo/ CarouselDemo'
import ShadcnButton from './components/Button.jsx/ShadcnButton'
import ShadcnInput from './components/input/ShadcnInput'
import ShadcnCard from './components/card/ShadcnCard'
import Label from './components/label/Label'

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    alert(`Button clicked! Input value: ${inputValue}`);
  };

 

  return (
    <div className="App">
      
      <ShadcnCard title="Demo Card">
        <ShadcnInput
          placeholder="Type something..."
          onChange={handleInputChange}
        />
        <ShadcnButton onClick={handleClick}>Click Me</ShadcnButton>
      </ShadcnCard>

      {/* <CarouselDemo onClick={handleClick}></CarouselDemo> */}
      <Label/>
    </div>
  );
}

export default App;

