import React, { useState } from 'react'

export default function BirthdayForm() {
    const [birthDate, setBirthDate] = useState('');
    const [userEnterLuckyNo, setUserEnterLuckyNo] = useState('');
    const [lessZero, setLessZero] = useState(false)
    const [lucky, setLucky] = useState(false);
    const [unLucky, setUnLucky] = useState(false);
    
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
                <h2>👇</h2>
            </div>
            <div className="birthDayForm">
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
                    lucky && <p className="error-p">Congratulations!, Your birthday is a lucky number!!.</p>
                }
                {
                    unLucky && <p className="error-p">Oops!! Your birthday is not a lucky number!</p>
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
