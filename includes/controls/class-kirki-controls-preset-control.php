<?php
/**
 * select2 Customizer Control.
 *
 * @package     Kirki
 * @subpackage  Controls
 * @copyright   Copyright (c) 2016, Aristeides Stathopoulos
 * @license     http://opensource.org/licenses/https://opensource.org/licenses/MIT
 * @since       1.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Kirki_Controls_Preset_Control' ) ) {
	class Kirki_Controls_Preset_Control extends Kirki_Customize_Control {

		public $type = 'preset';

		public $multiple = 1;

		public function enqueue() {
			wp_enqueue_script( 'kirki-preset' );
		}

		protected function content_template() { ?>

			<# if ( ! data.choices ) return; #>
			<label>
				<# if ( data.label ) { #>
					<span class="customize-control-title">{{ data.label }}</span>
				<# } #>
				<# if ( data.description ) { #>
					<span class="description customize-control-description">{{{ data.description }}}</span>
				<# } #>
				<select {{{ data.link }}} data-multiple="1">
					<# for ( key in data.choices ) { #>
						<option value="{{ key }}"<# if ( key === data.value ) { #>selected<# } #>>
							{{ data.choices[ key ]['label'] }}
						</option>
					<# } #>
				</select>
			</label>
			<?php
		}
	}
}
