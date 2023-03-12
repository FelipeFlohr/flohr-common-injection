import type { DecoratorTarget } from "../../node_modules/inversify/lib/annotation/decorator_utils";
import { inject } from "inversify";

/**
 * Decorator to be used whenever
 * you want to inject implementations
 * into classes annotated with
 * "@Injectable()". Can be used in
 * the class constructor or class
 * field.
 * @param serviceIdentifice A symbol
 * containing the name of the abstraction.
 * @returns The implementation.
 * 
 * @since 12/03/2023
 * @author Felipe Matheus Flohr
 * @example
 * Example with field decorator (the backward slash
 * was placed in front of the "@" because
 * currently there is a bug in VSCode in which
 * the "@" is not being rendered properly):
 * ```
 * const TYPES = {
 *    ClassToBeInjected: Symbol("ClassToBeInjected"),
 *    ExampleClass: Symbol("ExampleClass")
 * }
 * 
 * \@Injectable()
 * class ExampleClassImpl implements ExampleClass {
 *    \@Inject(TYPES.ClassToBeInjected) private readonly injected: ClassToBeInjected;
 * 
 *    public constructor(injected: ClassToBeInjected) {
 *       this.injected = injected;
 *    }
 * }
 * ```
 * 
 * Example with constructor (the backward slash
 * was placed in front of the "@" because
 * currently there is a bug in VSCode in which
 * the "@" is not being rendered properly):
 * ```
 * const TYPES = {
 *    ClassToBeInjected: Symbol("ClassToBeInjected"),
 *    ExampleClass: Symbol("ExampleClass")
 * }
 * 
 * \@Injectable()
 * class ExampleClassImpl implements ExampleClass {
 *    private readonly injected: ClassToBeInjected;
 * 
 *    public constructor(@Inject(TYPES.ClassToBeInjected) injected: ClassToBeInjected) {
 *       this.injected = injected;
 *    }
 * }
 * ```
 */
export default function Inject(
    serviceIdentifice: symbol
): (
    target: DecoratorTarget<unknown>,
    targetKey?: string | symbol,
    indexOrPropertyDescriptor?:
        | number
        | TypedPropertyDescriptor<unknown>
        | undefined
) => void {
    return inject(serviceIdentifice);
}
