import axios from 'axios';
import { useState } from 'react'
import toast from "react-hot-toast";
function Contact() {
  const [email,setemail]=useState('');
  const [name,setname]=useState('');
  const [message,setmessage]=useState('');
  const [phone,setphone]=useState('');
  const handleSendMessage=async(e)=>{
    e.preventDefault();
    try{
    await axios.post('https://event-planning-b-production.up.railway.app/api/v1/user/send-message',{
      email,phone,name,message
    },{
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    }).then(res=>{
      toast.success(res.data.message);
      setemail('');
      setphone('');
      setname('');
      setmessage('');
    })
  }catch(error){
    console.log(error);
    toast.error(error.response.data.message);
  }
  }
  return (
    <div className="contact container">
    <div className="banner">
      <div className="item">
        <h4>Address</h4>
        <p>Any where, Any City, 4521</p>
      </div>
      <div className="item">
        <h4>Call Us</h4>
        <p>Call Us: +91-321-111-1111</p>
      </div>
      <div className="item">
        <h4>Mail Us</h4>
        <p>at@gmail.com</p>
      </div>
    </div>
    <div className="banner">
      <div className="item">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14509.957801855542!2d84.11714119753056!3d24.606810057213085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c50747fffa757%3A0x636462797425c28e!2sNabinagar%2C%20Bihar%20824301!5e0!3m2!1sen!2sin!4v1713333088446!5m2!1sen!2sin" 
         style={{ border: 0, width: "100%", height: "450px" }}
         allowfullscreen="" 
         loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="item">
        <form onSubmit={handleSendMessage}>
          <h2>CONTACT</h2>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          <textarea
            rows={10}
            placeholder="Message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact