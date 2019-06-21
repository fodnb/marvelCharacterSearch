const thisYear = new Date();
const Footer = () => (
    <footer className="footer">
        <div className="footerContent">
            <p>&#x00A9; Daniel McGhee {thisYear.getFullYear()}</p>
        </div>
        <style jsx>
            {`

                .footer {
                    bottom: 0;
                    position: fixed;
                    height: 30px;
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