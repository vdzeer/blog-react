import './AddPost.css';

function AddPost({posts, setPosts}) {
  const addPost = () => {
    const inputTitle = document.getElementById('input__title').value;
    const inputText = document.getElementById('input__text').value;
    
    if (!inputTitle || !inputText) return alert('Input data!');

    setPosts([...posts, {
      title: inputTitle,
      description: inputText,
      likes: 0
    }]);

    
    document.getElementById('input__title').value = '';
    document.getElementById('input__text').value = '';
  }
  
  localStorage.setItem('posts', JSON.stringify(posts));

  return (
    <div className="addPost">
      <div className="add">
        <h2 className="add__title">Add post</h2>
        <label htmlFor="input__title">Title: </label>
        <br/>
        <input type="text" id="input__title" placeholder="Your title"/> 
        <br/> <br/>
        <label htmlFor="input__title">Text: </label>
        <textarea 
          rows="10" 
          cols="45" 
          id="input__text" 
          placeholder="Your text"
          />
        <button className="add__btn" onClick={addPost}>Add</button>
      </div>
    </div>
  );
}

export default AddPost;