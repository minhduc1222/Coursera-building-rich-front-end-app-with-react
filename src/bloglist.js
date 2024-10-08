const Bloglist = ({blogs, title}) => {

    const blog_delete = (id) => {
        
    }
    return (
        <div className="home">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={() => blog_delete(blog.id)}>Delete</button>
            </div>
            ))}
        </div>
    );
}

export default Bloglist;