import React, { useState } from 'react';

function Form({ sendFormData }) {
  const [formData, setFormData] = useState({Name:'',
  Email:'',Phone:'',ImageLink:'',Gender:'Male'});
  const [chek,setChek] = useState(false)

  const onInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendFormData(formData);
    setFormData({Name:'',
    Email:'',Phone:'',ImageLink:'',Gender:'Male'
  })
  setChek(false)
  }
  

  return (
    <div>
      <form className="form_component" >

        <label>Name</label>
        <input type='text' name='Name' onChange={onInputChange} value={formData.Name} />

        <label>Email</label>
        <input type='email' name='Email' onChange={onInputChange} value={formData.Email}/>

        <label>Phone No</label>
        <input type='tel' name='Phone' onChange={onInputChange} value={formData.Phone} />

        <label>Image link</label>
        <input type='url' name='ImageLink' onChange={onInputChange} value={formData.ImageLink}/>

        <label>Gender</label>
        <select name='Gender' onChange={onInputChange} value={formData.Gender}>
          <option value='Male'>Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Skill <span className='importent'>*not editable</span>
          <div className='skill_container'>
            <div>
              <input type="checkbox" id="skill" name="HTML" onChange={onInputChange} />
              <label>HTML</label>
            </div>
            <div>
              <input type="checkbox" id="skill" name="CSS" onChange={onInputChange} />
              <label>CSS</label>
            </div>
            <div>
              <input type="checkbox" id="skill" name="JavaScript" onChange={onInputChange}  />
              <label>JavaScript</label>
            </div>
          </div>
        </label>
        <button onClick={handleFormSubmit}>Register Student</button>
      </form>
    </div>
  )
}

export default Form