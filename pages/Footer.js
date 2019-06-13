const thisYear = new Date();
const Footer = () => (
    <footer className="footer">
        <div className="footerContent">
            <p>&#x00A9; Daniel McGhee {thisYear.getFullYear()}</p>
        </div>
        <style jsx>
            {`
                .footerContent {
                }
                .footer {
                    margin: 0 auto;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 20px 0;
                    font-size: 20px;
                    font-family: comic-sans;
                    text-align: center;
                }
            `}
        </style>

    </footer>
);

export default Footer;