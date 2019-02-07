/*
 * Projects listing
 */

 let projectsList = [
	{
		id: 'clipjump',
		name: 'Clipjump',
		desc: [
			'Clipjump is a full fledged clipboard manager for Windows. It relies on the power of keyboard shortcuts and combinations.',
			'It supports extension via plugins, has configurable hotkeys and enables users to write scripts via a feature known as Clipjump Custom.'
		],
		date: '2013-16',
		github: 'https://github.com/aviaryan/Clipjump',
		weight: 2,
		websites: ['http://clipjump.sourceforge.net'],
		tags: ['autohotkey', 'clipboard']
	},
	{
		id: 'shach',
		name: 'Shach',
		desc: ['Shach is a compiler written in Yacc/Lex that converts a common language to Bash and Batch.'],
		github: 'https://github.com/aviaryan/shach/blob/master/REPORT.md',
		date: '2017',
		tags: ['compiler', 'cpp']
	},
	{
		id: 'su4ahk',
		name: 'Sublime 4 AutoHotkey',
		desc: [
			'A Sublime Text addon to do AutoHotkey coding in the editor. Provides much more than a Sublime Text package.'],
		github: 'https://github.com/aviaryan/Sublime4Autohotkey',
		date: '2013-14',
		tags: ['autohotkey', 'sublime-text']
	},
	{
		id: 'su4ahk',
		name: 'Sublime 4 AutoHotkey',
		desc: [
			'A Sublime Text addon to do AutoHotkey coding in the editor. Provides much more than a Sublime Text package.'],
		github: 'https://github.com/aviaryan/Sublime4Autohotkey',
		date: '2013-14',
		tags: ['autohotkey', 'sublime-text']
	},
	{
		id: 'su4ahk',
		name: 'Sublime 4 AutoHotkey',
		desc: [
			'A Sublime Text addon to do AutoHotkey coding in the editor. Provides much more than a Sublime Text package.'],
		github: 'https://github.com/aviaryan/Sublime4Autohotkey',
		date: '2013-14',
		tags: ['autohotkey', 'sublime-text']
	}
];


/*
 * Sort and return
 */
function compareDates(a, b) {
	// current year
	const year = new Date().getFullYear();
	// base year - when I started development
	const baseYear = 2013 - 1;

	// date value generator
	const fd = (date) => {
		if (date.indexOf('present') > -1)
			return year - baseYear + 1; // largest, so +1
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
		// a comes before b in original array
		// let comp = (a.weight || 5) <= (b.weight || 5);
		return -1; // (comp) ? 1 : -1;
	}
}

projectsList.sort(compareDates);

export default projectsList;