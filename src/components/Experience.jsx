// import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
// import dsc from '../media/DSC.png'
// import scr from '../media/SCR.png'
import gotg from '../media/zoom.png'
// import rfp from '../media/RFP.png'
// import ca from '../media/CA.png'
import tcd from '../media/prime.png'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
// import Modal from 'react-bootstrap/Modal'

const Experience = ({darkMode}) => {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
            <Container>
                <br></br>
                <h2 className="lead" align="center"><b>- Projects -</b></h2>
                <br></br>
                <Zoom>
                <Row>
                    <Col lg={6} sm={15} > 
                    {/*  */}
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        { <Card.Img variant="top" src={tcd}/> }
                                        <Card.Body>
                                            <Card.Title align="center">primevideo Clone</Card.Title>
                                            <Card.Text>
                                                <p align="center">amazon prime video website project Unit-2 Amazon Prime Video, or simply Prime Video, is an American subscription video on-demand over-the-top streaming and rental service of Amazon offered as a standalone service or as part of Amazon's Prime subscription.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <ul>
                                            <li>A Collaborative TeamWork Project</li>
                                            <li>Area of Responsibility : Designing the user registration and Login & SignUp page.</li>
                                            <li>Tech Languages : HTML | CSS | Javascript</li>
                                            <li>Duration : 1 Week</li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/Singh970271/primevideo" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={6} sm={15}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={gotg}/>
                                        <Card.Body>
                                            <Card.Title align="center">ZoomCar-Clone-FrontEnd</Card.Title>
                                            <Card.Text>
                                                <p align="center">Zoomcar, is an “Indian Self-drive” car Rental Company, headquartered in Bangalore, India. The company was founded in February 2013 by David Back and Grey Moran. It currently operates in 34+ cities, it retails over 2,000 brands and 200,000 products across its platforms and has made driving convenience for the travellers across the country.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                    <ul>
                                            <li>A Collaborative TeamWork Project</li>
                                            <li>Area of Responsibility : Built ZSM Page and integrated it with the frontend & Laid out the database schema and build the Server.</li>
                                            <li>Tech Languages : HTML | CSS | Javascript | Api</li>
                                            <li>Duration : 1 Week</li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>   
                            {/* <Modal show={show} onHide={handleClose} className="modal">
                                <Modal.Body>Heya! The project is in development mode, you can visit the repository and have a look. Feel free to contribute!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="outline-dark" onClick={handleClose}>
                                    Close
                                </Button>
                                <a href="" target="_blank" rel="noreferrer noopener">
                                    <Button variant="outline-dark">View Github Repo</Button>
                                </a>
                                </Modal.Footer>
                            </Modal>
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} onClick={handleShow} className="sbtn">View Project</Button>
                            <a href="https://creative-tapioca-8f84ab.netlify.app/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a> */}
                             <a href="https://magnificent-axolotl-3ff102.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/Singh970271/ZoomCar-Project" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    {/* <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={ca}/>
                                        <Card.Body>
                                            <Card.Title align="center">CharitAble</Card.Title>
                                            <Card.Text>
                                                <p align="center">A Fundraising Web App where people can start a fundraiser for free</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Developed a Fundraising Web App where people can start a fundraiser for free and also contribute to other ongoing fundraisers.
                                        <br></br>This website can connect you to different Blood Banks as a Donor and Patient.
                                        <br></br>Tech Stack - ReachJs, Bootstrap, Cloud Firestore
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://charit-able.netlify.app/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/Tejaswi-Chaudhari/CharitAble" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col> */}
                </Row>
                </Zoom>
                <br></br>
                {/* <Zoom>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={rfp}/>
                                        <Card.Body>
                                            <Card.Title align="center">Rooted - Portal for farmers</Card.Title>
                                            <Card.Text>
                                                <p align="center">Developed a Portal for Farmers to sell their goods at a better rate.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>User-friendly and clean basic scripted website
                                        <br></br>Tech Stack - HTML, CSS, JavaScript
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://rooted-portal.netlify.app/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/SheHacks-Hack-O-holics/SheHacks" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={dsc}/>
                                        <Card.Body>
                                            <Card.Title align="center">Google Developer Student Clubs</Card.Title>
                                            <Card.Text>
                                                <p align="center">Worked as a core team member of GDSC UMIT</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Organized Study Jams, Hackathons and Webinars.
                                        <br></br>Hosted events of Google Cloud and Machine Learning.
                                        <br></br>Guided students in Google Cloud and Android Development Study Jams
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                        <a href="https://dscumit.netlify.app/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Website</Button>
                        </a>
                        <a href="https://www.instagram.com/dsc__umit/" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Instagram Handle</Button>
                        </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={scr}/>
                                        <Card.Body>
                                            <Card.Title align="center">Student Council</Card.Title>
                                            <Card.Text>
                                                <p align="center">Representative of Department of Computer Science and Technology, UMIT</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Managed and helped students in their curriculum and other difficulties.
                                        <br></br>Co-organized annual fest 'Arcane Illusions'.
                                        <br></br>Coordinated between faculties and students about studies and other activities.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://www.instagram.com/umit_sc/" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Instagram Handle</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                </Row>
                </Zoom> */}
            </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Experience