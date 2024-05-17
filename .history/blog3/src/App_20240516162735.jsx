
import './App.css'
import { Button } from './components/ui/button'
import { Carousel } from './components/ui/carousel'
import { CarouselDemo } from './components/demo/ CarouselDemo'

function App() {
 

  return (
    <>
    <div className='h-full  flex justify-center items-center border-2 flex-col'>
    <Button size='icon'>click me </Button>
    <CarouselDemo></CarouselDemo>
    </div>
    </>
  )
}

export default App
