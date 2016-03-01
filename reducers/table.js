import { Map, List } from 'immutable';

const initialState = Map({
	pageTableData: Map({
		current: 1, total: 0, datas: List.of()
	})
});

export default function (state = initialState, action) {
	switch(action.type) {
		case 'GET_PAGETABLE_DATA': 
			var json = state.toJS();
			console.log(json)
			return state;
	}
	return state;
}