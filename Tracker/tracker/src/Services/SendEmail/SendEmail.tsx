import emailjs from "emailjs-com";
import { useHistory } from "react-router";
import { Button } from "reactstrap";
import notify, { SccMsg } from "../Notification";
import './SendEmail.css';

export default function ContactUs() {

    const history = useHistory();
    function sendEmail(e:any) {
        e.preventDefault();

    emailjs.sendForm('service_6h66g8s', 'my-template'
    , e.target, 'user_2yCwRHQGK7r7v89rC1FRK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        history.push("/home");
        notify.success(SccMsg.EMAIL_SENT);
    }

    return(
        <div className="SendEmail section">
            <div className="customCont ">
                <h1 id="niceTitle">Send me an Email</h1>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div id="blackk" className="col-8 form-group pt-2 mx-auto ">
                            <textarea className="form-control" id="" cols={30} rows={8} placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
                <Button onClick={()=> history.push("/home")}>↩</Button>
            </div>
        </div>
    );
};