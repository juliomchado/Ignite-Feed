import {Header} from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import {SideBar} from "./components/SideBar";
import {Post} from "./components/Post";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
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
        </main>
      </div>
    </div>
  );
}

export default App;
