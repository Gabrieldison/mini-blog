import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./app.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GabrielDison.png",
      name: "Gabriel Dison de Lima Reis",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animiquo",
      },
      {
        type: "paragraph",
        content:
          "fugit sapiente dolores quisquam sed tempore vel quibusdaexcepturi",
      },
      { type: "link", content: "gabriel" },
      { type: "link", content: "dison" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "diego fernandes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animiquo",
      },
      {
        type: "paragraph",
        content:
          "fugit sapiente dolores quisquam sed tempore vel quibusdaexcepturi",
      },
      { type: "link", content: "gabriel" },
      { type: "link", content: "dison" },
    ],
    publishedAt: new Date("2022-08-06 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
