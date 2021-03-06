/**
 * KIRKI CONTROL: CHECKBOX
 */
wp.customize.controlConstructor['kirki-checkbox'] = wp.customize.Control.extend({

	// When we're finished loading continue processing
	ready: function() {

		var control = this;

		// Get the initial value
		var checkbox_value = control.setting._value;

		// Change the value
		this.container.on( 'change', 'input', function() {
			// Get the checkbox status
			checkbox_value = ( jQuery( this ).is( ':checked' ) ) ? true : false;
			// Set the value in the WordPress API
			control.setting.set( checkbox_value );
		});

	}

});
