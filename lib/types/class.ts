/**
 * Type of a class.
 * @template T Type of the class. Default is "any".
 * 
 * @since 12/03/2023
 * @author Felipe Matheus Flohr
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Class<T = any> = new (...args: any[]) => T;

export default Class;