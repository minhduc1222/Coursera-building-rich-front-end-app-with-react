import { useState } from "react";
import blogList from "./bloglist"

const Home = () => {
    const [blogs, setblogs] = useState(
        [   {title: "my new web page", body: "lorem ispum...", author: "mario", id: 1},
            {title: "welcome to dev par", body: "lorem ispum...", author: "yoshi", id: 2},
            {title: "web top kit", body: "lorem ispum...", author: "mario", id: 3}
        ]
    );
    
    return (
        <div className="home">
            {/* <h2>{blogs.title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
            ))} */}
            <blogList blogs={blogs} title="All blogs"/>
        </div>
    )
}

export default Home;