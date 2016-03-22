import { Map, List } from 'immutable';

const initialState = Map({
	pageTableData: Map({
		loading: true, current: 1, total: 0, datas: List.of()
	}),
	tableData: Map({
		loading: true, current: 1, total: 0, datas: List.of()
	})
});

function mergeTableData(state, table) {
	return data => state.merge({ [table]: data });
}

function setTableProp(state, path) {
	return val => state.setIn(path, true, val);
}

export default function (state = initialState, action) {
	switch(action.type) {
		case 'MERGE_TABLE_DATA': 
		console.log(action);
			return mergeTableData(state, 'pageTableData')(action.table);
		case 'SET_TABLE_PROP': 
			return setTableProp(state, ['pageTableData', 'loading'])(action.loading);
	}
	return state;
}