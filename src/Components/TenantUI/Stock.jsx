import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Button, ButtonGroup, Badge } from 'react-bootstrap';
import store from '../../store';
import ApplicationForm from './ApplicationForm';

function Stock() {

    const history = useHistory();

    const items = useSelector(state => state.stock.items);

    useEffect(() => {
        store.dispatch.stock.getTopSales();
    }, []);

    const handleShowApplicatioForm = (id) => {
        store.dispatch.stock.showApplicationForm(items.find(item => item.id === id));
    }

    const handleShowdetails = (id) => {
        history.push('/lot.html?' + new URLSearchParams({id: id}));
    }

    return (
        <>
            <h1 className="text-secondary display-6 mb-3">
                Акционерное Общество «Международный аэропорт Шереметьево» приглашает к сотрудничеству и предлагает Арендаторам и всем заинтересованным компаниям рассмотреть возможность аренды помещений.
            </h1>
            <Row xs={2} md={3} className="g-3">
                {
                    items.map(item =>
                        <Col key={item.id}>
                            <Card border="warning" className="h-100">
                                <Card.Header>{item.type}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Площадь: <Badge bg="warning" text="dark"> {item.S} кв. м. </Badge>
                                    </Card.Text>
                                    <Card.Text>
                                        Минимальные коммерческие условия (МГП за кв. м в мес., без НДС) <Badge bg="warning" text="dark"> от {item.price} у.е. </Badge>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <ButtonGroup className="w-100">
                                        <Button variant="secondary" size="sm" onClick={() => handleShowdetails(item.id)}>
                                            Подробности
                                        </Button>
                                        <Button variant="warning" size="sm" onClick={() => handleShowApplicatioForm(item.id)}>
                                            Направить коммерческое предложение
                                        </Button>
                                    </ButtonGroup>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <ApplicationForm />
        </>
    );
}

export default Stock;