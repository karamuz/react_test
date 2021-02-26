const BlogList = ({blogsprop, title, handleDelete}) => {
    
    //const blogs = props.blogsprop;
   // console.log(props, blogs);
    
    //const title = props.title;
    
    return ( 
        <div className="blog-list">
            <h3> { title }</h3>
                
                {blogsprop.map((iterative) => (
                
                <div className="blog-preview" key = {iterative.id}>
                <h2>{iterative.title}</h2>
                <p>written by {iterative.author}</p>
                <button onClick={() => handleDelete(iterative.id)}>delete blog</button>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;