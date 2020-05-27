import React from 'react'
import {Col, Card, Row} from 'antd'
import {Lindsay} from '../assets/lindsay_montgomery.png'
const { Meta } = Card;

const About = () => {
    return(
        <div>
            <h1>About getTrails</h1>
            <Row>
            <Col span={12} >
                    <Card
                        hoverable
                        style={{ width: 400, float: "right"}}
                        cover={<img alt="Mary Kang Photo" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Mary Kang" description="Mary is a super outdoorsy chick who loves yoga and picking up frogs." />
                    </Card>
            </Col>
            <Col span={12} >                   
                    <Card
                        hoverable
                        style={{ width: 400, float: "left"} }
                        cover={<img alt="Lindsay Montgomery Photo" src={'../assets/lindsay_montgomery.png'} />}
                    >
                        <Meta title=" Lindsay Montgomery" description="Lindsay is not as outdoorsy as Mary but likes to walk her dog in the woods." />
                    </Card>
            </Col>
            </Row>

            <p>Mary and Lindsay built getTrails to encourage all the indoorsy folks out there to explore the great outdoors during the COVID-19 Pandemic.</p>
            <p>Lindsay and Mary are both Full Stack Software Developers studying at the Flatiron School, scheduled to graduate June 18. 
            </p>
        </div>
        
)
}

export default About


