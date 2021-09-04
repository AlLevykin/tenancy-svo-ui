import { Route, Switch } from 'react-router-dom';
import Stock from './Stock';
import Lot from './Lot';
import NoMatch from './Lot';

function Content() {
    return (
        <div className="p-3">
            <Switch>
                <Route path="/stock.html" component={Stock} exact />
                <Route path="/lot/:id.html" component={Lot} exact />  
                <Route component={NoMatch} />              
            </Switch>
        </div>
    );
}

export default Content;