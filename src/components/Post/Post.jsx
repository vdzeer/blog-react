import './Post.css';

function Post({el, index, like}) {
  const changeNum = () => {
    like(index);
  }

  return (
    <div className="post">
      <h2 className="post__title">{el.title}</h2>
      <span className="post__desc">{el.description}</span>
      <div className="post__likes">
        <span>Likes: {el.likes}</span>
        <button onClick={changeNum}>Like</button>
      </div>
    </div>
  );
}

export default Post;