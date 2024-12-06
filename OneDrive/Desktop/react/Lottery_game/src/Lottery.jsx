import { useState } from "react";
import Button from './../../react3/src/Button';
import './Lottery.css'
import { genTicket , sum } from "./helper";



function Lottery() {
    

      let [ticket , setTicket] = useState(genTicket(3));

       let is_winning = sum(ticket) === 15;


      return (
          <div>

             <h1>Lottery ticket</h1>

              <div className="ticket">
               <span>{ticket[0]}</span>
               &nbsp;

               <span>{ticket[1]}</span>
               &nbsp;
               <span>{ticket[2]}</span>

                <h3> {is_winning && "congratulation you win"}</h3>  

              </div>
              
          </div>
      )



}


export default Lottery;

