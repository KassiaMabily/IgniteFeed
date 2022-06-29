import './global.css';
import { Header } from './components/Header';
import { Post } from './Post';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={"Diego Fernandez"}
            content={"Lorem Ipsum"}
          />

          <Post
            author={"Diego Fernandez"}
            content={"Lorem Ipsum"}
          />
        </main>
      </div>
    </div>
  )
}

export default App
