/**
 * KIRKI CONTROL: CODE
 */
wp.customize.controlConstructor.code = wp.customize.Control.extend({

	// When we're finished loading continue processing
	ready: function() {

		var control  = this,
		    element  = control.container.find( '#kirki-codemirror-editor-' + control.id ),
		    language = control.params.choices.language;

		// HTML mode requires a small hack because CodeMirror uses 'htmlmixed'.
		if ( 'html' === control.params.choices.language ) {
			language = { name: 'htmlmixed' };
		}

		var editor = CodeMirror.fromTextArea( element[0], {
			value:       control.setting._value,
			mode:        language,
			lineNumbers: true,
			theme:       control.params.choices.theme,
			height:      control.params.choices.height + 'px'
		});

		// On change make sure we infor the Customizer API
		editor.on( 'change', function() {
			control.setting.set( editor.getValue() );
		});

		// Hack to refresh the editor when we open a section
		element.parents( '.accordion-section' ).on( 'click', function(){
		    editor.refresh();
		});

	}

});
