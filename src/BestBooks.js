import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
const axios = require('axios');
require('dotenv').config();




class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showForm: false,
    }
  }


  componentDidMount = async () => {
    const { user } = this.props.auth0;
    console.log(this.props.auth0);
    let emailaddress = user.email;
    console.log('email', emailaddress);
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books?email=${emailaddress}`);
    console.log('book', bookData);


    await this.setState({
      books: bookData.data
    })

    console.log(this.state.books);
  }

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  postBookFunc = async (e) => {
    e.preventDefault();

    const { user } = this.props.auth0;

    let bookInfo = {
      title: e.target.bookName.value,
      description: e.target.bookDes.value,
      status: e.target.bookStatus.value,
      email: user.email
    }

    // let postBookData = await axios.get(`${process.env.REACT_APP_SERVER}/postBookFunc`,{params:bookInfo});
    let postBookData = await axios.post(`${process.env.REACT_APP_SERVER}/postBookFunc`, bookInfo);

    this.setState({
      books:postBookData.data
    })


  }


  render() {

    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <Button onClick={this.showForm} variant="primary">Add a Book!</Button>
        </Jumbotron>
        <div>
          {this.state.showForm && (
            <Form onSubmit={this.postBookFunc} >
              <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Add New Book!</Form.Label>
                <Form.Control type="text" name="bookName" placeholder="Book Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Add a description</Form.Label>
                <Form.Control type="text" name="bookDes" placeholder="Book Description" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Add a status</Form.Label>
                <Form.Control type="text" name="bookStatus" placeholder="Book status" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}


          {this.state.books.map((element, key) => {
            return (
              <Card key={key} style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>
                    {element.description}
                  </Card.Text>
                  <Card.Text>
                    {element.status}
                  </Card.Text>
                  <Card.Text>
                    {element.email}
                  </Card.Text>
                </Card.Body>
              </Card>);
          })
          }
        </div>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
