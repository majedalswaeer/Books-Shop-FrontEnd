import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Formclass extends React.Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.postBookFunc} >
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

            </div>
        )
    }
}

export default Formclass
