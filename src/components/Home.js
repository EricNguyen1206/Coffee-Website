import { memo } from "react";
import "../styles/home.css";

function Home({ homeBanner }) {
    return (
        <section
            className="home"
            id="home"
            style={{ background: `url(${homeBanner}) no-repeat center` }}
        >
            <div className="content">
                <h3>fresh coffee in the morning</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat labore, sint cupiditate distinctio tempora
                    reiciendis.
                </p>
                <a href="#" className="btn">
                    get yours now
                </a>
            </div>
        </section>
    );
}

export default memo(Home);
