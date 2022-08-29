import {Header} from "./components/Header";
import {Post} from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar/>
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
