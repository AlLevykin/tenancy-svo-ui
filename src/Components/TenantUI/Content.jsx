import { Route, Switch } from 'react-router-dom';
import Stock from './Stock';
import Lot from './Lot';
import NoMatch from './NoMatch';

function Content() {
    return (
        <div className="p-3">
            <Switch>
                <Route path="/stock.html" component={Stock} exact />
                <Route path="/lot.html" component={Lot} exact />  
                <Route component={NoMatch} />              
            </Switch>
        </div>
    );
}

export default Content;