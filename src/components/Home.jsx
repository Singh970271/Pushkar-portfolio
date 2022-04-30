import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import helloLight from '../media/hello-light.svg';
import helloDark from '../media/hello-dark.svg';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import tcd from '../media/pic.png'

const Home = ({darkMode}) => {
    return (
        <div>
            <AttentionSeeker shakeX>
            <Row>
                <Col lg={12} xs={12}>
                <h4 className="display-3 hello" align="center">Hi! I'm <code>Pushkar Kumar</code></h4>
                {/* <h1 align="center"></h1> */}
                <br></br>
                <h2 className="lead" align="center">I
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='[ " am a Full-Stack Web Developer.", " love designing.", " am Tech enthusiast with an interest for coding.", " am a learner for life!" ]'>
                    </span>
                </h2>
                </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Container align="center">
                    <Col lg={3} xs={15}>
                  { <img align="center" src={tcd} alt="hello" className="hello-img"/> }
                </Col>
                </Container>
            </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home