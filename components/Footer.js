import React, {useState} from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import FooterLink  from './FooterLink';


const URL = ""
const locationAddress = "This is a placeHolder address"
const socialURL1 = ""
const socialURl2 = ""

function Footer({src, width, height}) {

    const [email, setEmail] = useState('');

    // sends email to the backend for subscriber list 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
            email,  
        }),
        headers: {
            "Content-Type": "application/json",
        },
        });
        const data = await res.json();
        if (data === "Success") {
        setEmail(""); 
        }
  };

    //  Controls the input value and stores to state
    const handleText = (e) => {
        setEmail(e.target.value);
      };

    return (
    <>
    <div className={styles.line}></div>
    <section className={styles.containerFooter}> 
        
        <div className={styles.containerFooterContent}>
            <h2 >Stay Updated!</h2>
            <p>Join Our Mailing List and be the first to hear about our new designs.</p>
        </div>
    

        {/* Image of Footer to Break up and introduce the footer */}
        <div className={styles.conatinerImageFooter}>
            <div>
                <Image src={src} width={width} height={height} />
            </div>
            <div className={styles.containerContentEnterEmail}>
                <h4>Enter your Email to Subscribe to our <span>Mailing List</span></h4>
            </div>
        </div>
        
        {/* Subscribe input */}
        <div className={styles.containerSubscribeInput}>
            <div className={styles.subscribeInput}>
                <input
                    className={styles.input}
                    name="email"
                    type="text"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => handleText(e)}
                />
                <div className={styles.inputSubscribe} onClick={handleSubmit}>Submit</div>
            </div>
        </div>
        

        {/* Social Links */}
        <div className={styles.containerTablet}>
            <div className={styles.containerSocialThumbNail}>
                {/* <div>
                    <a href={socialURL1}><Image src={'/instagramFooter.png'} width={60} height={60} /></a>
                </div>
                <div>
                    <a href={socialURl2}><Image src={'/etsyFooter.jpg'} width={110} height={60} /></a>
                </div> */}
            </div>
                
            {/* Footer Links */}
            <div className={styles.containerFooterLinks}>
                <FooterLink urlLink={'/contact'} pageName={'Contact'} />
                <FooterLink urlLink={'/'} pageName={'Terms & Conditions'} />
                <FooterLink urlLink={'/'} pageName={'Reviews'} />
                <FooterLink urlLink={'/'} pageName={'Privacy Policy'} />
            </div>
        </div>
        

        {/* Location */}
        <div className={styles.containerLocation}>
            <div className={styles.location}>LOCATION </div>
            <p className={styles.location}>{locationAddress}</p>
        </div>

    </section>
    </>
    )
}

export default Footer
