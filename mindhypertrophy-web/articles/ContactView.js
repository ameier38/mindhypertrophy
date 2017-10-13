import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Banner from './Banner'
import '../styles/CardView.css'
import '../styles/CardContent.css'

const content = (
    <div className="CardContent">
        <p>
            Use below links for appropriate contact.
        </p>
        <ul>
            <li><a href="https://github.com/ameier38/mindhypertrophy/issues">Code issues</a></li>
            <li><a href="mailto:info@mindhypertrophy.com">Say hi</a></li>
        </ul>         
    </div>
)

const ContactView = () => (
    <div className="CardView">
        <Banner 
            includeLogo={true}
            title={"Contact"}
            description={"Something to say?"} />
        <Grid>
            <Row>
                <Col xs={12}>
                    <div className="Card">
                        {content}
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default ContactView
