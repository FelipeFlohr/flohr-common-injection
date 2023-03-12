import Bind from "./bind";

/**
 * Container holding all abstractions'
 * implementations.
 * 
 * @since 12/03/2023
 * @author Felipe Matheus Flohr
 */
interface Container {
    /**
     * Binds an abstraction to its implementation.
     * @param identifier The symbol identifier of
     * the abstraction.
     * @template T The type of the abstraction.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     * @example
     * ```
     * const TYPES = {
     *     Abstraction: Symbol("IAbstraction")
     * }
     * 
     * const container = new Container();
     * container.bind<IAbstraction>(TYPES.Abstraction).toSingleton(AbstractionImpl);
     * ```
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bind<T>(identifier: symbol): Bind
    /**
     * Unbinds an abstraction from its implementation.
     * @param identifier The symbol identifier of
     * the abstraction.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    unbind(identifier: symbol): void
    /**
     * Unbinds an abstraction from its implementation
     * asynchronously.
     * @param identifier The symbol identifier of
     * the abstraction.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    unbindAsync(identifier: symbol): Promise<void>
    /**
     * Unbinds every abstraction in the container.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    unbindAll(): void
    /**
     * Unbinds every abstraction in the container
     * asynchronously.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    unbindAllAsync(): Promise<void>
    /**
     * Gets the implementation of an abstraction.
     * @param identifier The symbol identifier of
     * the abstraction.
     * @template T The abstraction type.
     * @returns The implementation.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    get<T>(identifier: symbol): T
    /**
     * Gets the implementation of an abstraction
     * asynchronously.
     * @param identifier The symbol identifier of
     * the abstraction.
     * @template T The abstraction type.
     * @returns The implementation.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    getAsync<T>(identifier: symbol): Promise<T>
}

export default Container;