import React from 'react';
import './All.css';

const WhatsYourName = ({handleSubmit, setName, greeting, greetingClass}) => {
  return (
    <div className='whatsyourname'>
      <div className={`${greetingClass}`}>
        <h4>What's your name?</h4>
        <form onSubmit={handleSubmit}>
          <input onChange={setName}/>
          <button type='submit'>Go</button>
        </form>
      </div>
      <div className={`greeting ${greetingClass}`}>
        {greeting}
      </div>
    </div>
  )
}

export default WhatsYourName;