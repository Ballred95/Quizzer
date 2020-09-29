
import React, { useState } from 'react' 
import Questions from './questions';
import ShowQuiz from './showQuiz';

export default function Truefalse(props) {

    const [questions, setQuestions] =useState([1])
    const [showit, setShow] = useState([])
    const [submit, setSubmit] = useState(false)
    

    const questionData = []

    

    function handleClick() {
      // console.log(document.cookie)
      let ans = document.cookie.split(',')
      let display = ans.map(ans => <div className='ans'>{ans}</div>)
      setShow(display)
      setSubmit(true)

      
    }
    if(submit == false) {
    return (
        <div className='mainDisplay'>
          <div className='container'>
            <div className='questions'>
            {questions.length > 0 && questions.map((question, index)=> {
                return <div key={index}><Questions/></div>
            })}
            </div>
            </div>
            <div className='counter'>
                {questions.length <= 9 ? <button onClick={()=> setQuestions([...questions, 1])}>Add Question</button> : <button onClick={()=> setQuestions([...questions])}>Add Question</button>}
            {questions.length > 0 ? (
                
               <button
                 onClick={() => {
                   questions.pop();
                   setQuestions([...questions]);
                 }}
               >
                 Delete Question
               </button>
             ) : null}
             
            <h1>Questions: {questions.length}</h1>
            
            </div>
            <button onClick={handleClick}>submit</button>
            
            
        </div>
        ) }
        else if (submit == true) {
          return (
            <div>
              {showit}
            </div>
          )
        }

        
}

