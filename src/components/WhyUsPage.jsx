import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './WhyUsPage.module.css';

export default function WhyUsPage() {
    return (
        <Container fluid className="mt-5 mb-5 overflow-hidden">
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center text-center">
                    <h2 className={`${styles['section-header']}`}>Our Features</h2>
                    <p className={`${styles['section-desc']}`}>Our services are distinguished by their care for your time, reliability and free diagnosis. Below you will find the characteristics that describe us.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} lg={4} className="d-flex justify-content-center align-items-center">
                    <div className={`${styles['custom-card']}`}>
                        <div className={`${styles['custom-card-header']}`}>
                            <FontAwesomeIcon icon={faClock} size="4x" style={{ color: "#03045E" }} />
                        </div>
                        <div className={`${styles['custom-card-body']}`}>
                            <h5 className={`${styles['custom-card-title']}`}>Fast Service</h5>
                            <p className={`${styles['custom-card-text']}`}>
                                We guarantee swift solutions, ensuring you can get back to using your technology asap.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} xl={4} className="d-flex justify-content-center align-items-center">
                    <div className={`${styles['custom-card']}`}>
                        <div className={`${styles['custom-card-header']}`}>
                            <FontAwesomeIcon icon={faAward} size="4x" style={{ color: "#03045E" }} />
                        </div>
                        <div className={`${styles['custom-card-body']}`}>
                            <h5 className={`${styles['custom-card-title']}`}>Warranty</h5>
                            <p className={`${styles['custom-card-text']}`}>
                                Your confidence in our services is crucial. That's why each repair comes with our 1 year warranty.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={4} className="d-flex justify-content-center align-items-center">
                    <div className={`${styles['custom-card']}`}>
                        <div className={`${styles['custom-card-header']}`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="4x" style={{ color: "#03045E" }} />
                        </div>
                        <div className={`${styles['custom-card-body']}`}>
                            <h5 className={`${styles['custom-card-title']}`}>Free Diagnosis</h5>
                            <p className={`${styles['custom-card-text']}`}>
                                We believe that understanding the issue is the key to fast and effective repairs.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
