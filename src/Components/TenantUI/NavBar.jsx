import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <NavLink className="nav-link link-secondary display-6" activeClassName="link-warning" to="/stock.html" exact>Биржа аренды</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink className="nav-link link-secondary display-6" activeClassName="link-warning" to="/applications.html" exact>Мои коммерческие предложения</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink className="nav-link link-secondary display-6" activeClassName="link-warning" to="/contracts.html" exact>Мои контракты</NavLink>
                </ListGroup.Item>                
            </ListGroup>
        </>
    );
}

export default NavBar;