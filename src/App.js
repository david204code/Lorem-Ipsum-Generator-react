import React, { useState } from 'react';
import data from './data';

function App() {

  const [count, setCount] = useState(0);  
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // count is a string even though type of is number, check by(typeof count)
    // console.log(count);
    // convert string to number
    let amount = parseInt(count);

    // display the user requested number of paragraph
    // slice with return a new copy of array
    // 0, meaning selecting data from the start of the array
    if(count <= 0) {
      amount = 1;
    }
    if(count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className ="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className ="lorem-form" onSubmit ={handleSubmit}>
        <label htmlFor ="amount">
          Paragraphs:
        </label>
        <input 
          type ="number" 
          name ="amount" 
          id ="amount" 
          value ={count} onChange ={(e) => setCount(e.target.value)}
        />
        <button type ="submit" className ="btn">Generate</button>
      </form>
      <article className ="lorem-text">
        {/* iterate over the text array */}
        {text.map((item, index) => {
          return(
            <p key ={index}>{item}</p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
