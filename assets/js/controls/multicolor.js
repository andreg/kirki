/**
 * KIRKI CONTROL: MULTICOLOR
 */
wp.customize.controlConstructor.multicolor = wp.customize.Control.extend({

	ready: function() {

		var control = this,
		    colors  = control.params.choices,
		    keys    = Object.keys( colors ),
		    value   = this.params.value,
		    target  = control.container.find( '.iris-target' );
		    i       = 0;

		// Proxy function that handles changing the individual colors
		function kirkiMulticolorChangeHandler( control, value, sub_setting ) {

			var picker = control.container.find( '.multicolor-index-' + sub_setting );

			// did we change the value?
			picker.wpColorPicker({
				target: target[0],
				change: function( event, ui ) {
					// Color controls require a small delay
					setTimeout( function() {
						value[ sub_setting ] = picker.val();
						// Set the value
						control.setting.set( value );
						// Trigger the change
						control.container.find( '.multicolor-index-' + sub_setting ).trigger( 'change' );
					}, 100 );
				}
			});

		}

		// The hidden field that keeps the data saved (though we never update it)
		this.settingField = this.container.find( '[data-customize-setting-link]' ).first();

		// colors loop
		while ( i < Object.keys( colors ).length ) {

			kirkiMulticolorChangeHandler( this, value, keys[ i ] );

			// Move colorpicker to the 'iris-target' container div
			var irisInput  = control.container.find( '.wp-picker-container .wp-picker-input-wrap' ),
			    irisPicker = control.container.find( '.wp-picker-container .wp-picker-holder' );
			jQuery( irisInput[0] ).detach().appendTo( target[0] );
			jQuery( irisPicker[0] ).detach().appendTo( target[0] );

			i++;

		}

	},

	/**
	 * Set a new value for the setting
	 *
	 * @param newValue Object
	 * @param refresh If we want to refresh the previewer or not
	 */
	setValue: function( newValue, refresh ) {
		this.setting.set( newValue );

		if ( refresh ) {
			// Trigger the change event on the hidden field so
			// previewer refresh the website on Customizer
			this.settingField.trigger( 'change' );
		}
	}

});
