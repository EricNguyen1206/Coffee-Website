import '../styles/contact.css'

function Contact() {
    return (
        <section className="contact" id="contact">

            <h1 className="heading"> <span>contact</span> us </h1>

            <div className="row">

            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.483835768144!2d106.78677780251374!3d10.847980150779197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752772b245dff1%3A0xb838977f3d419d!2sPosts%20and%20Telecommunications%20Institute%20of%20Technology%20HCM%20Branch!5e0!3m2!1sen!2sus!4v1634393223691!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" className="gmap_iframe map" title="map"></iframe>
                </div>
            </div>

                <form action="">
                    <h3>get in touch</h3>
                    <div className="inputBox">
                        <span className="fas fa-user"></span>
                        <input type="text" placeholder="name"/>
                    </div>
                    <div className="inputBox">
                        <span className="fas fa-envelope"></span>
                        <input type="email" placeholder="email"/>
                    </div>
                    <div className="inputBox">
                        <span className="fas fa-phone"></span>
                        <input type="number" placeholder="number"/>
                    </div>
                    <input type="submit" value="contact now" className="btn"/>
                </form>

            </div>

        </section>
    )
}

export default Contact
