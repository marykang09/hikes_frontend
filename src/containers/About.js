import React from 'react'
import {Col, Card, Row} from 'antd'
import lindsay from '../assets/lindsay_montgomery.png'
import mary from '../assets/mary_kang1.png'
const { Meta } = Card;

const About = () => {
    return(
        <div>
            <h1>About getTrails</h1>
            <Row>
            <Col span={12} >
                    <Card
                        hoverable
                        style={{ width: 400, height: 600,  float: "right"}}
                        cover={<img height={500} alt="Mary Kang Photo" src={mary} />}
                    >
                        <Meta title="Mary Kang" description="Mary is a super outdoorsy chick who loves yoga and picking up frogs." />
                    </Card>
            </Col>
            <Col span={12} >                   
                    <Card
                        hoverable
                        style={{ width: 400, height: 600,  float: "left"}}
                        cover={<img height={500} alt="Lindsay Montgomery Photo" src={lindsay} />}
                    >
                        <Meta title=" Lindsay Montgomery" description="Lindsay is not as outdoorsy as Mary but likes to walk her dog in the woods." />
                    </Card>
            </Col>
            </Row>
            <br/>
            <p>Mary and Lindsay built getTrails to encourage all the indoorsy folks out there to explore the great outdoors during the COVID-19 Pandemic.</p>
            <p>Lindsay and Mary are both Full Stack Software Developers studying at the Flatiron School, scheduled to graduate June 18. 
            </p>
        </div>
        
)
}

export default About


