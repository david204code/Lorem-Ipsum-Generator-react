import React, { useState } from 'react';
import data from './data';

function App() {

  const [count, setCount] = useState(0);  
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Praise the Lord!")
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
        <p>
          Aute ea non minim duis elit proident proident ullamco. Magna qui dolor commodo sit dolore labore tempor labore do velit ut est. Enim duis id cillum fugiat qui officia commodo. Elit eiusmod minim amet consequat aliquip deserunt dolore sit esse nulla laboris laboris est. Ex exercitation in anim ea elit Lorem est mollit adipisicing non cillum id. 
        </p>
        <p>
          Aute ea non minim duis elit proident proident ullamco. Magna qui dolor commodo sit dolore labore tempor labore do velit ut est. Enim duis id cillum fugiat qui officia commodo. Elit eiusmod minim amet consequat aliquip deserunt dolore sit esse nulla laboris laboris est. Ex exercitation in anim ea elit Lorem est mollit adipisicing non cillum id. 
        </p>
      </article>
    </section>
  );
}

export default App;
