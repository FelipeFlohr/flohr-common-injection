import type { interfaces } from "../../../node_modules/inversify/lib/interfaces/interfaces";
import Class from "../../types/class";
import Bind from "../bind";

export default class InversifyBindImpl<T> implements Bind {
    private readonly inversifyBind: interfaces.BindingToSyntax<T>;

    public constructor(inversifyBind: interfaces.BindingToSyntax<T>) {
        this.inversifyBind = inversifyBind;
    }

    public toSingleton(impl: Class): void {
        this.inversifyBind.to(impl).inSingletonScope();
    }

    public toTransient(impl: Class): void {
        this.inversifyBind.to(impl).inTransientScope();
    }

    /**
     * Takes an Inversify Bind instance
     * and converts to this instance.
     * @param bind Inversify instance.
     * @returns This instance.
     */
    public static fromInverisfyBind<T>(bind: interfaces.BindingToSyntax<T>) {
        return new InversifyBindImpl(bind);
    }
}