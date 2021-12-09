import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import Footer from '../../components/Footer/Footer'
import ImagePages from '../../assets/logo.svg'

const ListPage = () => {
  return(
    <>
      <Menu />
      <Header image={ImagePages} ></Header>
      <List />
      <Footer/>
    </>
  )
}

export default ListPage
