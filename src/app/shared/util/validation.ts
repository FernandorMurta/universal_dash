export class ValidationHelper {

	private static EMAIL_REGEX: RegExp = /\w+@(?:hotmail|gmail|icloud)\.com/g;


	public static EMAIL_ERROR = 'Só é aceito hotmail,gmail ou icloud';

	public static validateEmail(email: string): boolean {
		return ValidationHelper.EMAIL_REGEX.test(email);
	}
}
