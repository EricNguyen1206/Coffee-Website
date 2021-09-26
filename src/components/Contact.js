import '../styles/contact.css'

function Contact() {
    return (
        <section className="contact" id="contact">

            <h1 className="heading"> <span>contact</span> us </h1>

            <div className="row">

            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe 
                        className="gmap_iframe" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0" 
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Ho Chi Minh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
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
