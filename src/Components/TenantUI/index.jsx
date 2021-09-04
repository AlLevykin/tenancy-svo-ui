import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import store from '../../store';
import Logo from '../Logo';
import NavBar from './NavBar';
import Content from './Content';

function TenantUI() {
    return (
        <Provider store={store}>
            <Router>
                <Container fluid>
                    <Row>
                        <div className="nav-bar vh-100 border-end">
                            <Logo />
                            <NavBar />
                        </div>
                        <div className="content">
                            <Content />
                        </div>
                    </Row>
                </Container>
            </Router>
        </Provider>
    );
}

export default TenantUI;