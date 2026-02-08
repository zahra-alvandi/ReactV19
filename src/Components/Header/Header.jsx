import './Header.css'

function Header() {
    return(
        <div>
            <header className='header'>
                <ul className="ul">
                    <li className="li">
                        <a href="#" className="text">Home</a>
                    </li>
                    <li className="li">
                        <a href="#" className="text">About Us</a>
                    </li>
                    <li className="li">
                        <a href="#" className="text">Contact Us</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header