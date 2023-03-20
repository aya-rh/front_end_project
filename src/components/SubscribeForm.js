import { useEffect, useState } from "react"

const SubscribeForm = () => {
    const [email, setEmail] = useState("");

    const handleEmailSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        alert(`You have subscribed with ${email}`)
    },[email]);


    // Set the date we are counting down to:
    const countDownDate = new Date("March 24, 2023, 15:00:00").getTime();

    // Update the count down every 1 second 

    const countDown = setInterval(function() { 
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and countdown date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the count down is finished, display expired
        if (distance < 0) {
            clearInterval(countDown);
            document.getElementById("timer").innerHTML = "EXPIRED";
          }
        }, 1000);



    return ( 
        <div className="subscribe">
            <div className="subscribe-form">
                <form>
                    <label>Email:
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            
            <div className="subscribe-timer">
                <p id="timer">Countdown Timer</p>
            </div>
        </div>
    )

};

export default SubscribeForm;