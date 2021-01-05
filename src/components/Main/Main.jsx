import Post from '../Post/Post';
import './Main.css';

function Main({posts, setPosts}) {
  const like = (index) => {
    setPosts([
      ...posts.slice(0, index),
      {
        title: posts[index].title,
        description: posts[index].description,
        likes: ++posts[index].likes
      },
      ...posts.slice(index + 1)
    ]);

    localStorage.setItem('posts', JSON.stringify(posts));
  }

  return (
    <div className="main">
      {
        posts.map((el, index) => { 
          return <Post 
            el={el} 
            key={index} 
            index={index}
            like={like}
            />
        })
      }
    </div>
  );
}

export default Main;