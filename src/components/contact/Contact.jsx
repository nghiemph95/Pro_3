import "./contact.css"
import Phone from "../../img/phone.png.png"
import Email from "../../img/email.png.png"
import Address from "../../img/address.png.png"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com'
import { ThemeContext } from "../../context"

const Contact = () => {
        const formRef = useRef();
        const [done, setDone] = useState(false)
        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;

        const handleSubmit = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_1wf49h9', 'template_amff5jf', formRef.current, 'user_sbluBgnvVTtnEzLTYOyMy')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        }
    return (
        <div className = "c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    {/* Title */}
                    <h1 className = "c-title">Let's discuss your project</h1>
                    {/* Information */}
                    <div className="c-info">
                        {/* Phone Number */}
                        <div className="c-info-item">
                            <img 
                                src={Phone}
                                alt="" 
                                className="c-icon" 
                            />
                            +84 969 451 479
                        </div>
                        {/* Email */}
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            nghiemph95@gmail.com
                        </div>
                        {/* Address */}
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            48 Vu Huy Tan Street, Ward 3, Binh Thanh District
                        </div>  
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder = "Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder = "Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder = "Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows = "5" placeholder = "Message" name = "message"/>
                        <button>Submit</button>
                        {done && " Thank you... Email sended"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
