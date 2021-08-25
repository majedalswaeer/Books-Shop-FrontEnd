import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import Cardclass from './Card';
import Formclass from './Form';
import Jumbotronclass from './Jumbotron'
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
      books: postBookData.data
    })
  }


  deleteBook = async (bookID) => {
    //delete method is operating like get method
    const { user } = this.props.auth0;
    let email = user.email;
    let deleteBookData = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBookFunc/${bookID}?email=${email}`);
    this.setState({
      books: deleteBookData.data
    })
  }

  render() {

    return (
      <>
        <Jumbotronclass
        showForm={this.showForm}
        />
          
          {this.state.showForm && (
            <Formclass 
            postBookFunc={this.postBookFunc} 
            />
          )}

          {this.state.books.map((element, key) => {
            return (
              <Cardclass
                key={key}
                title={element.title}
                description={element.description}
                status={element.status}
                email={element.email}
                deleteBook={this.deleteBook}
                id={element._id} />
            );
          })
          }
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);

