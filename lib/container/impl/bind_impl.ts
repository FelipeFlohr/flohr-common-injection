import type { interfaces } from "../../../node_modules/inversify/lib/interfaces/interfaces";
import Class from "../../types/class";
import Bind from "../bind";

export default class InversifyBindImpl<T> implements Bind<T> {
    private readonly inversifyBind: interfaces.BindingToSyntax<T>;

    public constructor(inversifyBind: interfaces.BindingToSyntax<T>) {
        this.inversifyBind = inversifyBind;
    }
    public toSingleton(impl: Class<T>): void {
        this.inversifyBind.to(impl).inSingletonScope();
    }

    public toTransient(impl: Class<T>): void {
        this.inversifyBind.to(impl).inTransientScope();
    }

    public toConstant(any: T): void {
        this.inversifyBind.toConstantValue(any);
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