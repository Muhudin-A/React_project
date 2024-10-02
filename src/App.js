import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react'

function App() {
  const [firstName, setFirstname] = useState ("");
  const [lastName, setLastname] = useState ("");
  const [email, setEmail] = useState ("");
  const [contract, setContract] = useState ("");
  const [gender, setGender] = useState ("male");
  const [subject, setsubject] = useState (
    {
      english:true,
      math:false,
      physics: false,
    }
  );
  const [resume, setResume] = useState ("");
  const [url, setUrl] = useState ();
  const [selectedOptions, setSelectedOptions] = useState ("");
  const [about, setabout] = useState ("");


  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Contact: ${contract}
      Gender: ${gender}
      Selected Option: ${selectedOptions}
      Subjects: ${JSON.stringify(subject)}
      Resume: ${resume}
      URL: ${url}
      About: ${about}
    `);
  }

  const handleSubjectChange = (sub)=>{
    setsubject((prev)=>({...prev, [sub]:!prev[sub],}));
  }
  
  const handleReset = () => {
    // Reset all state variables here
    setFirstname("");
    setLastname("");
    setEmail("");
    setContract("");
    setGender("male");
    setsubject({
        english: true,
        maths: false,
        physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOptions("");
    setabout("");
};

  return (
    <div className="App">
      <h1>Form in react </h1>
      <fieldset>
        <form onSubmit={handleSubmit} method= "get">
          <label  for="firstname" >First Name *</label>
          <input type="text" name="firstname" id="firstname" value={firstName}
          onChange={(e) =>{setFirstname(e.target.value)}} 
            placeholder="Enter your First Name" required />
          
          <label for="lastname" >Last Name*</label>
          <input type="text" name="lastname" id="lastname"  value={lastName}
          onChange={(e)=>{setLastname(e.target.value)}}
            placeholder="Enter your last Name" required />

          <label for="email" >Email *</label>
          <input type="email" name="email" id="email" value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Enter your Email" required />
          
          <label for="tel" >Contact *</label>
          <input type="tel" name="contact" id="contact"  value={contract}
          onChange={(e)=>{setContract(e.target.value)}}
            placeholder="Enter Mobile Number" required />

          <label for="gender">Gender</label>
          <input type="radio" name="gender" id="male" value="male" checked={gender=='male'}
          onChange={(e)=>{setGender(e.target.value)}}
          />
          Male
          <input type='radio' name='gender' id='female' value="female" checked={gender=='female'}
          onChange={(e)=>{setGender(e.target.value)}}
          />
          Female
          <input type='radio' name='gender' id='other' value="other" checked={gender=="others"}
          onChange={(e)=>{setGender(e.target.value)}}
          />
          Other

          <label for='lang'>Your best Subject </label>
          <input type='checkbox' name='lang' id="english" checked={subject.english === true} 
          onChange={(e) =>handleSubjectChange("english")} />
          English
          <input type='checkbox' name='lang' id="Math" checked={subject.maths === true}
           onChange={(e) =>handleSubjectChange("maths")}/>
          Math
          <input type='checkbox' name='lang' id="Physics" checked={subject.physics === true}
          onChange={(e) =>handleSubjectChange("physic")} />
          Physics

          <label for="file" >Upload Resume *</label>
          <input type='file' name='file' id='file' 
          onChange={(e)=>{setResume(e.target.value)}}
          placeholder='Enter upload file' required />

          <label for='url'>Enter URL*</label>
          <input type='url' name='url'  id='url'
          onChange={(e)=>{setUrl(e.target.value)}} 
          placeholder='Enter URL' required />

          <lable>Select your choice </lable>
          <select name='select' id='select'
          value={selectedOptions} onChange={(e)=>{setSelectedOptions(e.target.value)}} >
            <option value="" disabled selected={selectedOptions === ""} >
              Select your Answ
            </option>
            <optgroup label='Beginners'>
              <option value='1'>HTML</option>
              <option value='2'>css</option>
              <option value='3'>Javascript</option>
            </optgroup>
            <optgroup label='Advanced'>
              <option value='5'>React</option>
              <option value='6'>Node</option>
              <option value='7'>Express</option>
              <option value='t'>Mongo</option>
            </optgroup>
          </select>

          <label for="about" >About</label>
          <textarea name='about' id='about' cols="30" rows="10" 
          onChange={(e) =>setabout(e.target.value)}
          placeholder='About yourself ' required></textarea>

          <button type='reset' value="reset" onClick={()=>{handleReset()}}>Reset</button>

          <button type='submit' value ="submit" >Submit</button>
          
          </form>
      </fieldset>
    </div>
  )
}

export default App;
