import React, { useState } from 'react' 
import Questions from './questions';

export default function Truefalse(props) {

    const [questions, setQuestions] =useState([1])




    return (
        <div className='mainDisplay'>
            <div className='questions'>
            {questions.length > 0 && questions.map((question, index)=> {
                return <div key={index}><Questions /></div>
            })}
            </div>
            <div className='counter'>
                {questions.length <= 5 ? <button onClick={()=> setQuestions([...questions, 1])}>Add Question</button> : <button onClick={()=> setQuestions([...questions])}>Add Question</button>}
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
             
            <h1>questions: {questions.length}</h1>
            </div>
        </div>
        )
}