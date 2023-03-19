import Class from "../types/class";

/**
 * Bind an abstraction
 * to its implementation.
 * @template T Type of the
 * bind value.
 * 
 * @since 12/03/2023
 * @author Felipe Matheus Flohr
 */
interface Bind<T> {
    /**
     * Binds to singleton scope.
     * @param impl The class implementation.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    toSingleton(impl: Class<T>): void;
    /**
     * Binds to transient scope.
     * @param impl The class implementation.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    toTransient(impl: Class<T>): void;
    /**
     * Binds to a constant value.
     * @param any Value to be binded.
     * 
     * @since 19/03/2023
     * @author Felipe Matheus Flohr
     */
    toConstant(any: T): void;
}

export default Bind;