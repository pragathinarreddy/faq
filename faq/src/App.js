
import React from "react"
import logo from './logo.svg';
import './App.css';
import faqs from "../src/accordion/data.json"

class App extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      activeIndex :null,
    }
  }
  render (){

    return (
      <>
    <h1>ALTCAMPUS FAQ</h1>
    <ul>
        {faqs.map((faq , index) => (
          <>
          <h2 onClick={()=> {this.setState ({activeIndex : this.state.activeIndex === index ? null : index })}}>
            {faq.Q} {this.state.activeIndex === index ? "👇" :"👆"}</h2>
          {
            index === this.state.activeIndex && <p>{faq.A}</p>

          }
          
          </>
          
          ))}
    </ul>
    
    
    </>
  );
}
}

export default App;
