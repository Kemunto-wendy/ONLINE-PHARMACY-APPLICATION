import "./header.css"
const Header = props =>{
    return(
        <div className="header">
        <nav>
            <h2 class="logo">ONLINE<span> PHARMACY </span> STORE</h2>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">CONTACT ME</a></li>
            </ul>
                <a href="#" class="btn">Commentary</a>
        </nav>
        </div>
    )
}

export default Header