import React from 'react';
import { Row, Col } from 'antd';

function GridQuiz() {
    const boxStyle = {
        padding: '16px',
        textAlign: 'center',
        borderRadius: '8px',
        fontWeight: 'bold',
        color: 'white',
        background: 'blue'
    };

    return (
        <div style={{ padding: '24px' }}>
        <Row gutter={[16, 16]}>
            <Col xs={24} md={6}>
            <div style={boxStyle}>Column 1</div>
            </Col>
            <Col xs={24} md={6}>
            <div style={boxStyle}>Column 2</div>
            </Col>
            <Col xs={24} md={6}>
            <div style={boxStyle}>Column 3</div>
            </Col>
            <Col xs={24} md={6}>
            <div style={boxStyle}>Column 4</div>
            </Col>
        </Row>
        </div>
    );
};

export default GridQuiz;

