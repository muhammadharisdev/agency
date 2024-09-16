import { useState } from 'react';
import style from './style.module.css'
function InquiryForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  console.log(name);
  console.log(email);
  console.log(number);

return (
<>
<div className={style.container} id='contact'>
<h1>Inquiry From</h1>
<form>
  <div className={style.formRow}>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />
  </div>
  <div className={style.formRow}>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/>
  </div>
  <div className={style.formRow}>
    <label htmlFor="Phone Number" >Phone Number</label>
    <input type="Phone Number" id="Phone Number" name="number" onChange={(e)=>setNumber(e.target.value)} placeholder='Phone Number' />
  </div>
  <div className={style.formRow}>
  <label htmlFor="option">Inquire For Field</label>
  <select className={style.input}id="option" name="option">
    <option className={style.input}  value="option1" disabled >Select....</option>
    <option className={style.input}  value="option1">24/7 Support</option>
    <option className={style.input} value="option2">Maintenece</option>
    <option className={style.input} value="option3">Other</option>
  </select>
    </div>
  <button type="submit" className={style.btn}>Submit</button>
</form>
</div>
</>
  )
}

export default InquiryForm;
