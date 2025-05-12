import './App.css'
import Header from './header'
import Footer from './Footer'
import Person from './Person'
import Banner from './Banner'
function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Person id="#0001" name="CY Ganderton" title="Web Developer" salary={5000} phone={+358417906745} email="user@mail.com" animal="Cat"/>
      <Footer/>
    </>
  )
}

export default App
