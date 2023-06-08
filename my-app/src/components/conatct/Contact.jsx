import "../conatct/contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Home from "../../img/address.png"
import { useRef } from "react"
import emailjs from 'emailjs';

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's get in touch! </h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                                />
                                720-789-0655
                            </div>
                            <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            probablydavidgarcia97@gmail.com
                            </div>
                            <div className="c-info-item">
                            <img className="c-icon" src={Home} alt="" />
                            Denver, CO
                            </div>
                        </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b> Connect with me!</b> Always intrested on working with great people!
                    </p>
                    <form ref ={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact