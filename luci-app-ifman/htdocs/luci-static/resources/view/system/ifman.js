'use strict';
'require view';
'require fs';
'require ui';

return view.extend({
	load: function() {
		return L.resolveDefault(fs.read('/etc/ifman/config.yaml'), '');
	},

	handleSave: function(ev) {
		var value = (document.querySelector('textarea').value || '').trim().replace(/\r\n/g, '\n') + '\n';

		return fs.write('/etc/ifman/config.yaml', value).then(function(rc) {
			document.querySelector('textarea').value = value;
			ui.addNotification(null, E('p', _('Contents have been saved.')), 'info');
			fs.exec('/etc/init.d/ifman', ['restart']);
		}).catch(function(e) {
			ui.addNotification(null, E('p', _('Unable to save contents: %s').format(e.message)));
		});
	},

	render: function(ifman) {
		return E([
			E('h2', _('Ifman')),
			E('p', { 'class': 'cbi-section-descr' },
				_('Ifman config.yaml editor')),
			E('p', {}, E('textarea', { 'style': 'width:100%', 'rows': 10 }, [ ifman != null ? ifman : '' ]))
		]);
	},

	handleSaveApply: null,
	handleReset: null
});
