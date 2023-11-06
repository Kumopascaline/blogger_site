import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import wait from "./wait.gif";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <img className="pending" src={wait} alt="loading spinner"></img>
        </div>
      )}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <h2>Written By: {blog.author}</h2>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
