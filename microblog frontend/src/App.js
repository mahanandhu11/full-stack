import { useState } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState("");

  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (post.trim() !== "") {
      setPosts([
        ...posts,
        {
          name: "Mahalakshmi",
          message: post,
          likes: 0,
        },
      ]);
      setPost("");
    }
  };

  const deletePost = (index) => {
    const newPosts = posts.filter((item, i) => i !== index);
    setPosts(newPosts);
  };

  const likePost = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes++;
    setPosts(newPosts);
  };

  return (
    <div className="container">
      <h1>Micro Blogging App</h1>

      <textarea
        placeholder="What's on your mind?"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>

      <br />

      <button onClick={addPost}>Post</button>

      <h2>Recent Posts</h2>

      {posts.map((item, index) => (
        <div className="post" key={index}>
          <h3>👤 {item.name}</h3>

          <p>📝 {item.message}</p>

          <button onClick={() => likePost(index)}>
            ❤️ Like ({item.likes})
          </button>

          <button
            className="delete"
            onClick={() => deletePost(index)}
            style={{ marginLeft: "10px", background: "red" }}
          >
            🗑 Delete
          </button>
        </div>
      ))}

      <h3>Total Posts : {posts.length}</h3>
    </div>
  );
}

export default App;