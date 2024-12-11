
import { useState } from 'react';
import Ticket from './Ticket';
import { genTicket, sum } from './helper';


export default function Lottery1({n,winningSum}) {
    
        let [ticket,setTicket] = useState(genTicket(n));

           let isWinning =  sum(ticket) === winningSum;


           let buyTicket = ()=>{
                  setTicket(genTicket(n));
           };



           
          return(<div>
                 
                 <h1> Lottery Game! </h1>

                 <Ticket ticket={ticket}/>

                 <button onClick={buyTicket}> buy new ticket</button>

                 <h3> {isWinning&&"congratulation you win!"} </h3>
              
          </div>);


}