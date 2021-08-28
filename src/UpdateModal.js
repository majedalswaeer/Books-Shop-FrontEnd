import React from 'react'
// import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateModal extends React.Component {
    render() {
        return (
            <div>

                <Form onSubmit={this.props.updateBookFromDataBase}>
                    <Form.Group className="mb-3" controlId="Input1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' defaultValue={this.props.bookDetalis.title} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Input2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' defaultValue={this.props.bookDetalis.description} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Input3">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name='status' defaultValue={this.props.bookDetalis.status} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default UpdateModal;
