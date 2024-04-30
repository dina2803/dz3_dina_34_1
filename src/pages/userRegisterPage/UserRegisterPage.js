import React, { useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import {addUserAction} from "../../reducer/actions";

function UsersRegisterPage() {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })
    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const addUser = (event) => {
        event.preventDefault()
        if (!/^[a-zA-Z]+$/.test(user.name)) {
            alert('Имя должно содержать только буквы, попробуйте еще раз')
            return
        } if (!/^[a-zA-Z]+$/.test(user.username)) {
            alert('Имя пользователя должно содержать только буквы, попробуйте еще раз')
            return
        } if (!user.email.includes('@gmail.com')) {
            alert('Почтовый адрес должен содержать @gmail.com, попробуйте еще раз')
            return;
        }
        const request = addUserAction(user)
        request()
    }

    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="text"
                                placeholder="email"
                                name="email"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button type="submit" variant="success" className="w-100">
                            register user
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default UsersRegisterPage