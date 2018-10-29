import React from 'react'
import { Router, Link } from "@reach/router";
const User = props => <h2>{props.userId}</h2>;

const App = ({ children }) => (
    <div>
        <nav>
            <Link to="/books">Home</Link>{" "}
            <Link to="books/users/123">Bob</Link>{" "}
            <Link to="books/users/abc">Sally</Link>
        </nav>
        {children}
    </div>
);

const Home = () => (
    <div>
        <h2>Welcome!</h2>
        <p>
            Select a user, their ID will be parsed from the URL and passed to the User
            component
    </p>
    </div>
);
const Books = () => (

    <Router>
        <App path="/books">
            <Home path="/books" />
            <User path="books/users/:userId" />
        </App>
    </Router>
)

export default Books
