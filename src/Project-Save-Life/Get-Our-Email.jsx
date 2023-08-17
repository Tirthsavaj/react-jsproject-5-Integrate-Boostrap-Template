import React from "react";
import './Comon.css'
import './stylesheet.css'

const GetOurEmail = () => {
    return(
        <section class="section3">
        <div class="container">
            <div class="row h-100 align-items-center">
                <div class="box text-align-center">
                    <h1>GET OUR EMAILS</h1>
                    <p>Subscribe to our e-mail list and stay up-to-date <br/> with all our news and stay in touch.</p>
                    <input type="text" placeholder="Email Address" /><br/>
                    <button>subcribe</button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default GetOurEmail;