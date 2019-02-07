 let projectsList = [
	{
		id: '0',
		name: 'React demos',
		desc: [
			'My collection of react demos'
		],
		date: '2019-02',
		github: 'https://github.com/ashishdotme/react-demos',
		weight: 2,
		website: ['https://github.com/ashishdotme/react-demos'],
		tags: ['reactjs', 'javascript']
	},
	{
		id: '1',
		name: 'React demos',
		desc: [
			'My collection of react demos'
		],
		date: '2019-02',
		github: 'https://github.com/ashishdotme/react-demos',
		weight: 2,
		website: ['https://github.com/ashishdotme/react-demos'],
		tags: ['reactjs', 'javascript']
	},
	{
		id: '2',
		name: 'React demos',
		desc: [
			'My collection of react demos'
		],
		date: '2019-02',
		github: 'https://github.com/ashishdotme/react-demos',
		weight: 2,
		website: ['https://github.com/ashishdotme/react-demos'],
		tags: ['reactjs', 'javascript']
	},
	{
		id: '3',
		name: 'React demos',
		desc: [
			'My collection of react demos'
		],
		date: '2019-02',
		github: 'https://github.com/ashishdotme/react-demos',
		weight: 2,
		website: ['https://github.com/ashishdotme/react-demos'],
		tags: ['reactjs', 'javascript']
	},

];


function compareDates(a, b) {
	const year = new Date().getFullYear();
	const baseYear = 2013 - 1;
	const fd = (date) => {
		if (date.indexOf('present') > -1)
			return year - baseYear + 1;
		else {
			for (let yr = year; yr > baseYear; yr--) {
				if (date.indexOf(yr.toString().substring(3)) > -1) {
					return yr - baseYear;
				}
			}
		}
	};
	let wta = fd(a.date) + (a.weight || 0);
	let wtb = fd(b.date) + (b.weight || 0);
	if (wta < wtb) {
		return 1;
	} else if (wta > wtb) {
		return -1;
	} else {
		return -1;
	}
}

projectsList.sort(compareDates);

export default projectsList;