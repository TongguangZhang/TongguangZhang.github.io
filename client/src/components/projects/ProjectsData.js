import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"

const projects = {
    1: {
        title: "WARG",
        image: project1,
        description: (
            <>
                <p>I'm also an automation and embedded software developer on WARG</p>
                <p>
                    This picture is from a flight test - I helped implement the Airside system that
                    took it, the software runs on a Nvidia Jetson, using CUDA to leverage its GPU
                </p>
            </>
        ),
        github: "https://github.com/UWARG/computer-vision-python",
    },
    2: {
        title: "WebCoach",
        image: project2,
        description: (
            <>
                <p>I made this website to help me track my workouts and progress.</p>
                <p>
                    It's built using the MERN stack, with a React frontend connected to the Node
                    server with Express, data is stored on the web based MongoDB Atlas database
                </p>
            </>
        ),
        github: "https://github.com/TongguangZhang/WebCoach",
    },
    3: {
        title: "MyBlogs",
        image: project3,
        description: (
            <>
                <p>I made this website when I first started learning Web Development</p>
                <p>
                    It uses Express and Node to create the server, and HTML and CSS to make a simple
                    user interface, it connects to MongoDB Atlas with Mongoose
                </p>
            </>
        ),
        github: "https://github.com/TongguangZhang/MyBlogs",
    },
}

export default projects

