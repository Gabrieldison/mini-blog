import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time dateTime="2022-05-11 08:13:30" title="11 de miao as 08:15">
                Publicado há uma hora
              </time>
            </div>

            <button
              title="Deletar Comentário"
              onClick={() => onDeleteComment(content)}
            >
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
