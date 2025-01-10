
import './App.css';

import Contact from './Contact';
import contacts from './utility/data.js';

function App() {
  return(<>
        <div className= " flex  space-x-10">
        <Contact  contacts = {contacts} idx = {0} />
       <Contact  contacts = {contacts} idx = {0} />
       <Contact  contacts = {contacts} idx = {0} />

        </div>
       
  </>);
}

export default App;
