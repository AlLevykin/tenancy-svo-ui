import { Badge } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Lot() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const lot = useSelector(state => state.stock.items.find(item => item.id === id));

    return (
        <div className="p-3">
            {
                lot && 
                <>
                <h1 className="display-6 text-secondary">{lot.name}</h1>
                <hr />
                <h2 className="text-secondary">Площадь: <Badge bg="warning" text="dark"> {lot.S} кв. м. </Badge></h2>
                <h2 className="text-secondary">Минимальные коммерческие условия (МГП за кв. м в мес., без НДС) <Badge bg="warning" text="dark"> от {lot.price} у.е. </Badge></h2>
                </>
            }
            
        </div>
    );
}

export default Lot;