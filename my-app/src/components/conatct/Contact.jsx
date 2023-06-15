import "../conatct/contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Home from "../../img/address.png"
import { useRef } from "react"
import emailjs from 'emailjs-com';
import { useState } from "react"
import FileSaver from 'file-saver';
import Resume from "../../img/Resume (9).pdf"

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_7b1y1jo', 'template_yh85uli', formRef.current, 'ntFmnXwhnX-g-HTEh')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }

    const saveFile = () => {
        FileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "../../img/Resume(9).pdf",
            "Resume(9).pdf"
    );
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
                        {done && "Thank You!"}
                    </form>
                    <div className="res">
                    <a href={Resume} download>Click here for my resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact