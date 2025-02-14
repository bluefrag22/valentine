import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homescreen from './val'



function App() {
  const [hide,setHide] = useState(true);
  const [pagetracker,setPagetracker] = useState(0)

 
  return <section>
      <Homescreen/>
    
  </section>
}

export default App
