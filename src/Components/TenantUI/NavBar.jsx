import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <ListGroup variant="flush">
            <ListGroup.Item>
                    <NavLink className="nav-link link-secondary h5" activeClassName="link-warning" to="/home.html" exact>Главная</NavLink>
                </ListGroup.Item>                
                <ListGroup.Item>
                    <NavLink className="nav-link link-secondary h5" activeClassName="link-warning" to="/stock.html" exact>Подобрать площадку</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink className="nav-link link-secondary h5" activeClassName="link-warning" to="/applications.html" exact>Мои коммерческие предложения</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink className="nav-link link-secondary h5" activeClassName="link-warning" to="/contracts.html" exact>Мои площадки</NavLink>
                </ListGroup.Item>                
            </ListGroup>
        </>
    );
}

export default NavBar;