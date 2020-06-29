import React from 'react'
import {Col, Card, Row} from 'antd'
import lindsay from '../assets/lindsay_montgomery.png'
import mary from '../assets/mary_kang1.png'
const { Meta } = Card;

const About = () => {
    return(
        <div>
            <Row className='aboutRow'>
                    <Card
                        hoverable
                        style={{ width: 400, height: 600}}
                        cover={<img height={500} alt="Mary Kang" src={mary} />}
                    >
                        <Meta title="Mary Kang" description="Mary is a super outdoorsy chick who loves yoga and picking up frogs." />
                    </Card>
                        
                    <Card
                        hoverable
                        style={{ width: 400, height: 600}}
                        cover={<img height={500} alt="Lindsay Montgomery" src={lindsay} />}
                    >
                        <Meta title=" Lindsay Montgomery" description="Lindsay is not as outdoorsy as Mary but likes to walk her dog in the woods." />
                    </Card>
            </Row>
            <br/>
            <p>Mary and Lindsay built getTrails to encourage all the indoorsy folks out there to explore the great outdoors during the COVID-19 Pandemic.</p>
            <p>Lindsay and Mary are both Full Stack Software Developers and built getTrails while studying at the Flatiron School. Lindsay and Mary both graduated from Flatiron's Full Stack Program in June 2020. 
            </p>
        </div>
        
)
}

export default About


