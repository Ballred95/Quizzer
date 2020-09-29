import React, { useState } from 'react' 
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




export default function Questions(props) {
    
        const [value, setValue] = React.useState('True');
        const [textValue, setTextValue] = useState('')
        const[finalValue, setFinalValue] = useState('')
      
        const handleChange = (event) => {
          setValue(event.target.value);
        };

        const handleTextChange = (event) => {
            setTextValue(event.target.value)
        }

        

        
        function handleCookie() {
         
          document.cookie = [document.cookie, textValue]
          

        }

        props.myProp(handleCookie)
        

   return (
   <div className='quiz-question'>
       <Paper elevation={3}>
       <FormControl component="fieldset">
  <FormLabel component="legend">Answer</FormLabel>
  <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
    <FormControlLabel value="True" control={<Radio />} label="True" />
    <FormControlLabel value="False" control={<Radio />} label="False" />
    
  </RadioGroup>
   <textarea name="text" id="questionText" value={textValue} onChange={handleTextChange} cols="30" rows="10" style={{resize:'none'}}></textarea>
</FormControl>

       </Paper>
       <button onClick={handleCookie}>save</button>
   </div>
   )
}

