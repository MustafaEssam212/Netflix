
import IntroBG from '../public/bg.jpg'
import Image from 'next/image';
import Header from '@/Components/Header';
import Input from '@/Components/Elements/Input';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";
import { useRouter } from 'next/router';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState({
        status: null,
        message: null
    })
    const router = useRouter();
    const {data: session} = useSession();

    useEffect(() => {
        setResponse({status: null, message: null})
    }, [])

    const handleOnChangeEmail = (s) => {
        setEmail(s)
    }

    const handleOnChangePassword = (s) => {
        setPassword(s)
    }


    const handleLogin = async (e) => {
        e.preventDefault();
      
        if(!email || !password){
            setResponse({status: 400, message: 'please enter a valid information'})
        }else{
            const res = await signIn("credential", {
                email: email,
                password: password,
                redirect: false,
              }).then(({ok, error, status}) => {
                if(ok){
                    router.push('/home')
                }else{
                    setResponse({status: status, message: error})
                }
              })
        }

    
    }

    return(
        <div className="sign-in">
            <div className="img-intro">
                <Image src={IntroBG.src} fill style={{objectFit: 'cover'}} />
            </div>

            <div className="layer-on">

                <Header />

                <div className='content'>
                    {
                        session ? <div className='already-logged'>
                            <p>Your are already logged in as <span>{session.user.email}</span></p>
                            <Link href="/home">Return to homepage</Link>
                        </div> : <form onSubmit={handleLogin}>
                        <h1>Sign In</h1>

                        <div className='form-Inputs'>
                            <div className='input-container'><Input onChangeInput={handleOnChangeEmail} type={'email'} text={`Email Address`} /></div>
                            <div className='input-container'><Input onChangeInput={handleOnChangePassword} type={'password'} text={`Password`} /></div>
                            <button onClick={handleLogin} className='first-button'>Sign In</button>
                            {response.status && <div className="message">
                                <p className={response.status === 200 ? "" : "error-message"}>{response.status === 200 ? <IoIosCheckmarkCircle className="Icon" /> : <IoIosCloseCircle className="Icon" />} {response.message}</p>
                            </div>}

                            <span>OR</span>

                            <button className='second-button'>Use a Sign-In Code</button>

                            <Link href="#">Forgot password?</Link>
                        </div>
                    </form>
                    }
                </div>

            </div>
     </div>
    )
}


export default SignIn;