import React from "react";
import './Comon.css'
import './stylesheet.css'

const Charity = () => {
    return(
        <>
            <section class="section4">
        <div class="row">
            <div class="w-50">
                <img src="img/15.jpeg" alt="" />
            </div>
            <div class="w-50 bg-img padding">
                <h4>Leasing Our Land,</h4>
                <h4>Fueling Climate Change</h4>
                <p>At various times in the geologic past, the Earth had dense forests in low-lying wetland areas. Due to
                    natural processes such as flooding, these forests were buried underneath soil. As more and more soil
                    deposited over them, they were compressed.</p>
                <button>Learn More</button>
            </div>
        </div>
    </section>

<section class="section5">
<div class="row">
    <div class="w-50 bg-color padding">
        <h4>Clean Water Changes</h4>
        <h4>Absolutely Everything</h4>
        <p>Factors that can shape climate are called climate forcings or “forcing mechanisms”. These include
            processes such as variations in solar radiation, variations in the Earth’s orbit, variations in the
            albedo or reflectivity of the oceans.</p>
        <button>Learn More</button>
    </div>
    <div class="w-50 bg-img row justify-content-center align-items-center">
        <img src="img/18.webp" alt="" />
    </div>

</div>
</section>
        </>
    )
}

export default Charity;