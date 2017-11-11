// Load scoped modules.
import BaseError from '@player1os/base-error'

/**
 * An interface describing a single parsed validation error.
 */
export interface IErrorItem {
	value: any,
	type: string,
	message: string,
}

/**
 * An error class containing a detailed parsed validation error.
 */
export default abstract class ValidationError extends BaseError {
	/**
	 * Sets the validation error's details and message.
	 * @param message A custom message for the error.
	 */
	constructor(
		/**
		 * Parsed validation error.
		 */
		public readonly details: {
			readonly [key: string]: IErrorItem[],
		},
		message?: string,
	) {
		// Copy the message from the joi validation error.
		super((typeof message === 'string') && (message !== '')
			? message
			: 'A validation error had occured')
	}
}
