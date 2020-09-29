import React, {Component} from 'react' 
import {NavLink} from 'react-router-dom'
    

export default class Homepage extends Component {
   constructor(props) {
       super(props)

       this.state = {
           
       }
   }



render() {
       return (
           <div className = ''>
               <h1 style={{textAlign: 'center'}}>Welcome to The Quiz Creator</h1>
        
        <div className='quizzes'>
        <NavLink to='open' style={{textDecoration:'none', color:"black"}}>
            <div className='quiz-card'>Open Ended
            <h3>coming soon!</h3>
            </div>
            </NavLink>
            <NavLink to='/truefalse' style={{textDecoration:'none', color:"black"}}>
            <div className='quiz-card'>True/False</div>
            </NavLink>
            <NavLink to='/multi' style={{textDecoration:'none', color:"black"}}>
            <div className='quiz-card'>Multi Choice
            <h3>coming soon!</h3>
            </div>
            </NavLink>
            
        </div>
           </div>
       )
   }
}