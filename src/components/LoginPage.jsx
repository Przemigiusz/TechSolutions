import React from 'react';
import { useAuth } from './AuthContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './LoginPage.module.css';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
    const { setIsLoggedIn } = useAuth();

    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        navigate('/dashboard/orders')
    };

    return (
        <Container fluid className="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center overflow-hidden">
            <h2 className={`${styles['section-header']}`}>
                Sign In
            </h2>
            <Form className={styles['login-form']}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Row>
                        <Col xs={12} sm={6} className="d-flex flex-row justify-content-center">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Col>
                        <Col xs={12} sm={6} className="d-flex flex-row justify-content-center">
                            <Link to="/forgot-password" className={`${styles['checkbox-link']}`}>Forgot Password?</Link>
                        </Col>
                    </Row>
                </Form.Group>

                <div className="d-flex justify-content-center align-items-center mb-3">
                    <Button variant="primary" className={`${styles['custom-button']}`} onClick={handleSignIn}>
                        Sign In
                    </Button>
                </div>
                <p className={styles['register-text']}>
                    Not a member? <Link to="/register" className={styles['register-link']}>Register</Link>
                </p>
            </Form>
        </Container >
    );
}
