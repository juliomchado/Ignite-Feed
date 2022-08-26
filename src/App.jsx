import {Header} from "./components/Header";
import {Post} from "./components/Post";
import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <Post
        author="Julio Machado"
        content="Lorem inmasdlçkasld asdm,asxczm sads.l al,as"
      />

      <Post
        author="Julio Machado"
        content="Lorem inmasdlçkasld asdm,asxczm sads.l al,as"
      />

      <Post
        author="Julio Machado"
        content="Lorem inmasdlçkasld asdm,asxczm sads.l al,as"
      />
    </div>
  );
}

export default App;
