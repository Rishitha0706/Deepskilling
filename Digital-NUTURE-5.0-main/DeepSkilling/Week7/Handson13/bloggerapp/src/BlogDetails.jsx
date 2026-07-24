import { blogs } from "./data";

function BlogDetails() {
  return (
    <section className="section">
      <h1>Blog Details</h1>

      {blogs.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <p>{blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </section>
  );
}

export default BlogDetails;