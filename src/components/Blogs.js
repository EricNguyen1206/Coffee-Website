import '../styles/blogs.css'
import BlogItems from '../apis/BlogItems'

function  Blogs() {
    return (
        <section className="blogs" id="blogs">

            <h1 className="heading"> our <span>blogs</span> </h1>

            <div className="box-container">
                {BlogItems.map(blog => (
                    <div  key={blog.image} className="box">
                        <div className="image">
                            <img src={blog.image} alt=""/>
                        </div>
                        <div className="content">
                            <a href="/" className="title">{blog.title}</a>
                            <span>by {blog.author} / {blog['export-date']}</span>
                            <p>{blog.introduction}</p>
                            <a href="/" className="btn">read more</a>
                        </div>
                    </div>

                ))}
            </div>

        </section>
    )
}

export default Blogs
