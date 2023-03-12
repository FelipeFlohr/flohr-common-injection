import Class from "../types/class";

/**
 * Bind an abstraction
 * to its implementation.
 * 
 * @since 12/03/2023
 * @author Felipe Matheus Flohr
 */
interface Bind {
    /**
     * Binds to singleton scope.
     * @param impl The class implementation.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    toSingleton(impl: Class): void;
    /**
     * Binds to transient scope.
     * @param impl The class implementation.
     * 
     * @since 12/03/2023
     * @author Felipe Matheus Flohr
     */
    toTransient(impl: Class): void;
}

export default Bind;