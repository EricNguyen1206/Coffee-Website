import '../styles/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="links">
                    <span>Links</span>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">menu</a>
                    <a href="#">products</a>
                    <a href="#">review</a>
                    <a href="#">contact</a>
                    <a href="#">blogs</a>
                </div>
                <div className="links">
                    <span>Legal</span>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Return Policy</a>
                    <a href="#">Shipping Policy</a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
                <div className="credit">© 2021 | created by <span>Eric Nguyen</span> | all rights reserved</div>
            </div>


        </footer>
    )
}

export default Footer
