import { Map, List } from 'immutable';

const initialState = Map({
	pageTableData: Map({
		loading: true, current: 1, total: 0, datas: List.of()
	})
});

export default function (state = initialState, action) {
	switch(action.type) {
		case 'GET_PAGETABLE_DATA': 
			return state.merge({ pageTableData: action.json });
		case 'LOADING': 
			return state.setIn(['pageTableData', 'loading'], action.json.loading);
	}
	return state;
}