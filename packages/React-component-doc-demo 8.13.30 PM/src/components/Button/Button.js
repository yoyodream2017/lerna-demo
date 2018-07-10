// @flow

import React from 'react';
import type { Element } from 'react';

import './Button.css';

type Props = {
	/** The color for the button */
	color?: string,
	/** The size of the button, can be 'small', 'normal', 'large' */
	size: 'small' | 'normal' | 'large',
	/** Disable button */
	disabled?: boolean,
	/** Gets called when the user clicks on the button */
	onClick?: () => void,
	/** Button label */
	children: Element<*>
}

/**
 * The only true button all around the world
 */
export default function Button({ color, size, onClick, disabled, children }: Props) {
	const styles = {
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<button className="button" style={styles} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
Button.defaultProps = {
	color: '#333',
	size: 'normal',
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	},
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
