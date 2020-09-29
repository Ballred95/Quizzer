import React from 'react' 
import Questions from './questions'

export default function ShowQuiz(props) {
   return (
   <div className='show-quiz'>
       <h1>{props.myProp}</h1>
       <h1>showing quiz</h1>
   </div>
   )
}