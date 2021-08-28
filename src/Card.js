import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Cardclass extends React.Component {
    render() {
        return (
            <div>
                <Card key={this.props.key} style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                    <b>Book's Title:</b> {this.props.title}
                  </Card.Title>

                  <Card.Text>
                   <b>Book's Description:</b> {this.props.description}
                  </Card.Text>

                  <Card.Text>
                    <b>Book's Status:</b> {this.props.status}
                  </Card.Text>

                  <Card.Text>
                    <b>Owner's Email:</b> {this.props.email}
                  </Card.Text>
                  {/* //if we are passing prop we cant call it directly from onClick we have to put a function */}
                  <Button onClick={()=>{this.props.deleteBook(this.props.id)}} variant="primary" type="submit">Delete Item!</Button>
                  <Button onClick={()=>{this.props.updateBook(this.props.id)}} variant="primary" type="submit">Update Item!</Button>

                </Card.Body>
              </Card>
                
            </div>
        )
    }
}

export default Cardclass
