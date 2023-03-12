import { Container as InverisfyContainer } from "inversify";
import Container from "../container";
import Bind from "../bind";
import InversifyBindImpl from "./bind_impl";

export default class InversifyContainerImpl implements Container {
    private readonly inversifyContainer: InverisfyContainer;

    public constructor() {
        this.inversifyContainer = new InverisfyContainer();
    }

    public bind<T>(identifier: symbol): Bind {
        const bind = this.inversifyContainer.bind<T>(identifier);
        return InversifyBindImpl.fromInverisfyBind(bind);
    }

    public unbind(identifier: symbol): void {
        this.inversifyContainer.unbind(identifier);
    }

    public async unbindAsync(identifier: symbol): Promise<void> {
        await this.inversifyContainer.unbindAsync(identifier);
    }

    public unbindAll(): void {
        this.inversifyContainer.unbindAll();
    }

    public async unbindAllAsync(): Promise<void> {
        await this.inversifyContainer.unbindAllAsync();
    }

    public get<T>(identifier: symbol): T {
        return this.inversifyContainer.get<T>(identifier);
    }

    public async getAsync<T>(identifier: symbol): Promise<T> {
        return await this.inversifyContainer.getAsync<T>(identifier);
    }
}