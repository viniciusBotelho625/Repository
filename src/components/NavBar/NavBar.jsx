import "./navbar.scss";

export default function Navbar() {
    return(
        <div className="navbar">

            <div className="wrapper">
                <span>Vini Dev</span>
                <div className="social">
                    <a href="#"> <img src="/icone-github.png" alt="logo github"/></a>
                    <a href="#"> <img src="/linkedin.png" alt="logo linkedIn"/></a>
                </div>
            </div>
        </div>
    );
}