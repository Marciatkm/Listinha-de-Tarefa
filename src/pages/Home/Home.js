
import Menu from '../../components/Menu/Menu'
import  Banner from '../../Banner/Banner'
import ImageNatal from '../../assets/bem-vindo.jpg'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  

  return(
    <>
      <Menu />
      <h1> Bem-vindos Amados</h1>
      <Banner  image={ImageNatal} > </Banner>
      
      <Footer/>
    </>
  )
}

export default Home




