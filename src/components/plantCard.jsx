import React, {useState, useEffect} from 'react';
import {Container, Row, Col } from 'react-bootstrap';

function plantCard({name, url}) {
    return (
            <Col xs={6} sm={6} md={4} lg={3}>
                <div>
                    <div className={"plantContainer"}>
                        <div className={"plantTitle"}>{name}</div>
                        <img className={"plantCard"} src={url}/>
                    </div>
                </div>
            </Col>
        
    )
}

export default plantCard;