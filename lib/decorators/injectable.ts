import { injectable } from "inversify";

/**
 * Decorator that needs to be used in
 * every class that is going to inject
 * something or is going to be injected
 * into something.
 * 
 * @since 12/03/2023
 * @author Felipe Matheus Flohr
 * @example
 * Example (the backward slash
 * was placed in front of the "@" because
 * currently there is a bug in VSCode in which
 * the "@" is not being rendered properly):
 * ```
 * @Injectable()
 * class WillBeInjectedImpl implements WillBeInjected {
 *     public constructor() {}
 * }
 * 
 * @Injectable()
 * class WillInjectSomething {
 *     private readonly something: WillBeInjected
 * 
 *     public constructor(@Inject(TYPES.WillBeInjected) something: WillBeInjected) {
 *         this.something = something;
 *     }
 * }
 * ```
 */
export default function Injectable(): <
    T extends abstract new (...args: never) => unknown
>(
    target: T
) => T {
    return injectable();
}
