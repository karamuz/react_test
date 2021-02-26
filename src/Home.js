import { useState, useEffect } from 'react';
import BlogList from './BlogList';



const Home = () => {

    //let name = 'luigi'
    const [name, setName] = useState('luigi');
    const [age, setAge] = useState(25);
    const [blogs, setBlogs] = useState([{title:'yo', body: 'lorem', author: 'mario', id: 1},
                                        {title: 'hey', body: 'ipsum', author: 'luigi', id: 2}]);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(iterative => iterative.id !== id);
        setBlogs(newBlogs);
     }

     useEffect(() => {
         console.log('effective test')

     });
    const handleClick = (e) => {
        console.log(e.target)
        alert("ohh yeah, gimme more");
    }
    const handleanotherClick = () => {
        setName('maario pizza maario');
        setAge(30)
        alert("alertion!!! your new name iis " +name);
    }
    return (
        <div className="Home">
            <BlogList blogsprop={blogs} title = 'all blogs here' handleDelete = {handleDelete}/>
            <BlogList blogsprop={blogs.filter((iterative) => iterative.author === 'mario' )} title = 'marios blogs here' handleDelete = {handleDelete}/>
            <p> { name } is {age} years old </p> 
            <h2>Click me motherfucker</h2>
            <button onClick={handleClick}>here baby</button>
            <button onClick={() => handleanotherClick()}>alert button</button>
        </div>
     );
}
 export default Home;