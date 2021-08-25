import React from 'react'
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Jumbotronclass extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>My Favorite Books</h1>
                    <p>
                        This is a collection of my favorite books
                    </p>
                    <Button onClick={this.props.showForm} variant="primary">Add a Book!</Button>
                </Jumbotron>

            </div>
        )
    }
}

export default Jumbotronclass
