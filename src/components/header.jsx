import React, {useState, useEffect} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import leaves from './images/Leaves.svg';

function header() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} className={"no-padding"}>
                    <div className={"header"}>
												<img className="leavesIcon" src={leaves}/>
                        <div className={"headerName"}>Water is Wet</div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default header;