import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState("");

  const handleNewCommentChange = () => {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  };

  const handleCreateNewComment = () => {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  };

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    console.log(commentsWithoutDeletedOne);

    setComments(commentsWithoutDeletedOne);
  };

  const handleNewCommentInvalid = () => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  const publishedDateFomatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFomatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentario"
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
