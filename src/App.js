import Header from './components/Header';
import Article from './components/Articles';


function App() {
  return (
    //Essa função não retorna mais de um elemento por isso tem que ser emglobado, como se fosse uma div.
    <>
      <Header />
      <Article />

    </>


  );
}

export default App;
