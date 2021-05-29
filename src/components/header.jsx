import React, {useState, useEffect} from 'react';
import {Container, Row, Col } from 'react-bootstrap';

function header() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} className={"no-padding"}>
                    <div className={"header"}>
                        <div className={"headerName"}>Water is Wet</div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default header;