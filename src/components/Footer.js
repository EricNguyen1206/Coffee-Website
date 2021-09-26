import '../styles/footer.css'

function Footer() {
    return (
        <footer className="footer">

            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
                <a href="#" className="fab fa-pinterest"></a>
            </div>

            <div className="links">
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">menu</a>
                <a href="#">products</a>
                <a href="#">review</a>
                <a href="#">contact</a>
                <a href="#">blogs</a>
            </div>

            <div className="credit">created by <span>Eric Nguyen</span> | all rights reserved</div>

        </footer>
    )
}

export default Footer
