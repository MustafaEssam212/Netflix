
import Image from "next/image";
import IntroBG from '../../public/bg.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Input from "../Elements/Input";
import Header from "../Header";
import { useEffect, useState } from "react";
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";


const Intro = () => {


    const [email, setEmail] = useState('');
    const [response, setResponse] = useState({
        status: null,
        message: null
    })

    const handleOnChange = (s) => {
        setEmail(s)
    }


    const handleOnSubmit = async () => {
        
        if(email){
            const res = await fetch(`/api/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(email)
            });
            const data = await res.json();
    
            if(res.ok){
                setResponse({status: 200, message: data.message})
            }else{
                setResponse({status: res.status, message: data.message})
            }
        }else{
            setResponse({status: 400, message: 'please enter your email'})
        }

    }


    useEffect(()=> {
        setResponse({status: null, message: null})
    }, [])

    return(
        <div className="home-intro-section">

            <div className="img-intro">
                <Image src={IntroBG.src} fill style={{objectFit: 'cover'}} alt="Background" />
            </div>


            <div className="layer-on">
                

                <div className="content">
                    <Header />

                    <div className="inner-content">
                        <h1>Unlimited movies, TV shows, and more</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <div className="sign-up">
                            <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                            <div className="sign-up-inputs">
                                <div className="input-div"><Input onChangeInput={handleOnChange} type={'email'} text={'Email Address'} /></div>
                                <button onClick={handleOnSubmit}>Get Started <MdOutlineKeyboardArrowRight className="Icon" /></button>
                            </div>
                            {response.status && <div className="message">
                                <p className={response.status === 200 ? "" : "error-message"}>{response.status === 200 ? <IoIosCheckmarkCircle className="Icon" /> : <IoIosCloseCircle className="Icon" />} {response.message}</p>
                            </div>}
                        </div>
                    </div>
                </div>


                <div className="shadow-top"></div>
                <div className="shadow-bottom"></div>

            </div>
            
        </div>
    )
}


export default Intro;