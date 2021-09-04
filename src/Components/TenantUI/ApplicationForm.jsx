import { useSelector } from 'react-redux';
import { Offcanvas, Form, Button } from 'react-bootstrap';
import store from '../../store';

function ApplicationForm() {

    const show = useSelector(state => state.stock.applicationForm.show);
    const lot = useSelector(state => state.stock.applicationForm.lot);

    const handleClose = () => store.dispatch.stock.hideApplicationForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        store.dispatch.stock.hideApplicationForm();
    }

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            {
                lot &&
                <>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="display-6">Коммерческое предложение</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Предмет аренды
                                </Form.Label>
                                <Form.Control type="text" size="lg" value={lot.name} disabled readonly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Вид деятельности
                                </Form.Label>
                                <Form.Control type="text" size="lg" value={lot.type} disabled readonly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Общая площадь, кв. м
                                </Form.Label>
                                <Form.Control type="text" size="lg" value={lot.S} disabled readonly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Арендная плата (МГП) за кв. м в мес., без НДС и эксплуатационных расходов
                                </Form.Label>
                                <Form.Control type="text" size="lg" value={lot.price} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Концессия, %
                                </Form.Label>
                                <Form.Control type="text" size="lg" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Срок аренды
                                </Form.Label>
                                <Form.Control type="text" size="lg" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Концепция
                                </Form.Label>
                                <Form.Control as="textarea"
                                    style={{ height: '100px' }} />
                            </Form.Group>
                            <Button variant="warning" type="submit" className="w-100" size="lg">
                                Направить коммерческое предложение
                            </Button>
                        </Form>
                    </Offcanvas.Body>
                </>
            }
        </Offcanvas>
    );
}

export default ApplicationForm;