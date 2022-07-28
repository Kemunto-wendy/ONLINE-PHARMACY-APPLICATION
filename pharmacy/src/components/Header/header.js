import "./header.css"
const Header = props =>{
    return(
        <div className="header">
        <div className="header-page">
        <img src="images/logo1.png" class="logo" />   
        ONLINE PHARMACY STORE
        </div>
        <div className="homepage">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">DIET</a></li>
            <li><a href="#">EXCERCISE</a></li>
            <li><a href="#">LIFESTYLE</a></li>
            <li><a href="#">RECOMMENDATION</a></li>
        </ul>
        </div>
        </div>
    )
}

export default Header