/**
 * KIRKI CONTROL: RADIO
 */
wp.customize.controlConstructor['kirki-radio'] = wp.customize.Control.extend({

	ready: function() {

		var control = this;

		// Change the value
		this.container.on( 'change', 'input', function() {
			control.setting.set( jQuery( this ).val() );
		});

	}

});
