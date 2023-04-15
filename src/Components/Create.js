import { useContext } from "react";
import Header from "./Header";
import { mycontext } from "../context";

const Create = () => {
  const { text, title, setTitle, setText, handleSubmit } =
    useContext(mycontext);

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
