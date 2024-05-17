
import './App.css'
import { Button } from './components/ui/button'
import { Carousel } from './components/ui/carousel'
import { CarouselDemo } from './components/demo/ CarouselDemo'
import 

function App() {
 

  return (
    <>
    <div className='h-full  flex justify-center items-center border-2 flex-col'>
    <Button size='default' variant='ghost'>click me </Button>
    <CarouselDemo></CarouselDemo>
    </div>
    </>
  )
}

export default App
