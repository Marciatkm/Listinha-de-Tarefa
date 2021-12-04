import ImageNatal from "../../assets/natal.svg"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import "../Banner/Banner.style.css"
import Footer from "../Footer/Footer"

const Banner = () => {

    return(
        
        <div>
           <Menu />
           <Header image={ImageNatal}>Então é Natal</Header>
           <Footer/>
        </div>
        
    )
}
export default Banner