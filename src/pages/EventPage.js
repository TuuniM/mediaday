import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Video from '../components/Video/Video';

import eventData from '../data/events.json';

const EventPage = () => {
    const { id } = useParams();

    const eventResult = eventData.events.find(({ videoUrl }) =>
        videoUrl === id

    );

    if (!eventResult) {
        return (<div>Event {id} was not found :(</div>)
    }

    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qYDsS4jvVMk?controls=0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

            <Container>
                <Row>
                    <Col>
                        <h1 className="display-4">{eventResult.name}</h1>
                    </Col>
                    <Col>
                        ????????
                    </Col>
                </Row>
                <Row>
                    <Col lg={9}><Video url={eventResult.streamUrl} type={eventResult.streamVideoType} /></Col>
                    <Col>
                        Alkaa päivänä: {eventResult.startDate}
                        <br />
                        Alkaa klo: {eventResult.startTime}
                        <br />
                    </Col>
                </Row>
            </Container>
            <br />
            {/*  */}
        </div>
    );
}

export default EventPage;
