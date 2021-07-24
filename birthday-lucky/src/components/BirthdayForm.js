import React, { useState } from 'react'
import LUCKY from './../images/lucky.png'
import UNLUCKY from './../images/unlucky.png'

export default function BirthdayForm() {
    const [birthDate, setBirthDate] = useState('');
    const [userEnterLuckyNo, setUserEnterLuckyNo] = useState('');
    const [lessZero, setLessZero] = useState(false)
    const [lucky, setLucky] = useState(false);
    const [unLucky, setUnLucky] = useState(false);
    const [closedIconBox, setCLosedIconBox] = useState(false);
   
    const closedIcon = () => {
        setCLosedIconBox(true)
    }

    
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(userEnterLuckyNo <= 0){
            return setLessZero(true)
        }
        console.log(birthDate, userEnterLuckyNo);
        // debugger;
        const date = ((birthDate).split("-")).join("");
        let sum = 0;
        for (let i = 0; i < date.length; i++) {
            let ch = date[i]
            sum += parseInt(ch);
            console.log(sum)
        }
        const luckyNo = Number(userEnterLuckyNo);
        if ((sum % luckyNo) === 0) {
            setLucky(true)
            setLessZero(false)
        }
        else {
            setUnLucky(true)
            setLessZero(false)
        }
    }
    return (
        <div>
            <div className="isBirthDay">
                <h2>Is Your Birthday is Lucky ?</h2>
                <h2><a href="#birthForm">👇</a></h2>
            </div>
            <div className="birthDayForm" id="birthForm">
                <div className={closedIconBox?"closedIconBox":"alertBox"}>
                    <h4 onClick={closedIcon} className="closed-icon">x</h4>
                    <p><strong>Privacy Notice!</strong> We are not storing your data.</p>
                </div>
                <h1>Enter Your Birthdate and lucky number to continue...🎂🎂🎂</h1>
                <div className="mainForm">
                    <form onSubmit={onFormSubmit}>
                        <div className="input-field">
                            <label>Select your Birth date:</label>
                            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <label>Enter your Lucky Number:</label>
                            <input type="number" value={userEnterLuckyNo} onChange={(e) => setUserEnterLuckyNo(e.target.value)} />
                        </div>
                        <div className="input-btn">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                {
                    lessZero && <p className="error-p">Value should be greater than zero.</p>
                }
                {
                    lucky && 
                    <div className="error-div">
                        <p className="error-p">Congratulations!, Your birthday is a lucky number!!.</p>
                        < img src={LUCKY} alt="" />
                    </div>
                }
                {
                    unLucky && 
                    <div className="error-div">
                        <p className="error-p">Oops!! Your birthday is not a lucky number!</p>
                        < img src={UNLUCKY} alt="" />
                    </div>
                }
            </div>
            <div className="footer">
                <ul>
                    <li><a href="https://github.com/Rishi05051997">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/vrushabh-dhatrak-328ab0148/">linkedIn</a></li>
                    <li><a href="https://vrushabhdhatak10-portfolio.netlify.app/">PortFolio</a></li>
                </ul>
                <p>© 2020 | Vrushabh Dhatrak | Privacy Policy</p>
            </div>

        </div>
    )
}
