import { getData } from './utils';

export const stockModel = {
    name: 'stock',
    state: {
        items: [],
        applicationForm: {
            show: false
        }
    },
    reducers: {
        updateItems(state, items) {
            return {...state, items: items};
        },
        hideApplicationForm(state) {
            return {...state, applicationForm: {show: false}};
        },
        showApplicationForm(state, lot) {
            return {...state, applicationForm: {show: true, lot: lot}};
        }        
    },
    effects: {
        async getTopSales() {
            await getData('api/stock.json').then(items =>
                this.updateItems(items)
            );
        }
    }
}