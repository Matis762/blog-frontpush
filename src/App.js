import Header from './components/Header';
import Article from './components/Articles';
import Posts from './components/Posts';

function App() {
  return (
    //Essa função não retorna mais de um elemento por isso tem que ser emglobado, como se fosse uma div.
    <>
      <h1>Meu blog</h1>
      <Header/>
      <Article/>
      
    </>


  );
}

export default App;
