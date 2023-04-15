import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = () => {
    const blog = { title, text };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(setText(""), setTitle(""), alert("Successfuly"))
      .then(Navigate("/"));
  };

  return (
    <>
      <Header text="Create New Blog" />

      <div className="create">
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Blog text:</label>
          <textarea
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button>Add Blog</button>
        </form>
      </div>
    </>
  );
};

export default Create;
