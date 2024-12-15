
import './App.css'
import { sum } from './helper'

import Lottery1 from './Lottery1'



function App() {

    let winningCondition = (ticket)=> {
        return  sum(ticket) > 25; 
    }


  return (
    <>    
      <Lottery1 n = {6}  winningCondition = {winningCondition}/>
    </>
  )
}

export default App
