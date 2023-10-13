import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // useState wrapping an array

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // useState hook to change values and refresh to update the displayed value
    const [name, setName] = useState('mario');
    const [num, setNum] = useState(25);

    const handleClick = () => {
        setNum(30)
        setName('luiji')
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }

    const woo = "bruh";

    // Load only when name changes
    useEffect(() => {
        console.log("use effect ran")
    }, [name]);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h2>Homepage</h2>
            <p>{name} is {num} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain(woo, e)}>Click me again</button>

            {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
            {blogs && <BlogList blogs={blogs.filter((blog) => (blog.author === 'mario'))} title={"Mario's Blogs"} />}
        </div>
    );
}

export default Home;