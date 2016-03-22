export function getPageTableData(page) {
	return (dispatch, getState) => {
		dispatch({ type: 'SET_TABLE_PROP', loading: true });
		setTimeout(() => {
			const pageSize = 3;
			let table = { loading: false, current: page, total: 10, datas: [] };

			for(let i = 0; i < pageSize; ++i) {
				table.datas.push({
					uuid: page * pageSize + i,
					name: `胡彦斌${page * pageSize + i}`,
		    		age: 32,
		    		address: `西湖区湖底公园${page * pageSize + i}号`
				});
			}

			dispatch({ type: 'MERGE_TABLE_DATA', table });
		}, 1500);
	}
}