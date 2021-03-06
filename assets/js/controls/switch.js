/**
 * KIRKI CONTROL: SWITCH
 */
wp.customize.controlConstructor.switch = wp.customize.Control.extend({

	ready: function() {

		var control = this;

		// Get the initial value
		var checkbox_value = control.setting._value;

		// Save the value
		this.container.on( 'change', 'input', function() {
			checkbox_value = ( jQuery( this ).is( ':checked' ) ) ? true : false;
			control.setting.set( checkbox_value );
		});

	}

});
