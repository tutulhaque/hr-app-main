import "./App.css";
import Header from "./header";
import Footer from "./Footer";
import Banner from "./Banner";
import PersonList from "./component/Person/PersonList";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <PersonList></PersonList>
      <Footer />
    </>
  );
}

export default App;
