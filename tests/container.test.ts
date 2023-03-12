import { Container, Inject, Injectable } from "../lib";

interface TestInterface {
    getName(): string
}

interface GetTestInterface {
    injectable: TestInterface
}

const TYPES = {
    TestInterface: Symbol("TestInterface"),
    GetTestInterface: Symbol("GetTestInterface")
};

@Injectable()
class TestInjectable implements TestInterface {
    getName(): string {
        return "John Doe";
    }
}

@Injectable()
class TestInjectedField implements GetTestInterface {
    @Inject(TYPES.TestInterface) public readonly injectable: TestInterface;

    public constructor(injectable: TestInterface) {
        this.injectable = injectable;
    }
}

@Injectable()
class TestInjectedConstructor implements GetTestInterface {
    public readonly injectable: TestInterface;

    public constructor(@Inject(TYPES.TestInterface) injectable: TestInterface) {
        this.injectable = injectable;
    }
}

describe("Container tests", () => {
    let containerField: Container;
    let containerConstructor: Container;

    beforeAll(() => {
        containerField = new Container();
        containerField.bind<TestInterface>(TYPES.TestInterface).toSingleton(TestInjectable);
        containerField.bind<GetTestInterface>(TYPES.GetTestInterface).toSingleton(TestInjectedField);

        containerConstructor = new Container();
        containerConstructor.bind<TestInterface>(TYPES.TestInterface).toSingleton(TestInjectable);
        containerConstructor.bind<GetTestInterface>(TYPES.GetTestInterface).toSingleton(TestInjectedConstructor);
    });

    it("should inject a class in the fields", () => {
        const testInterface: TestInterface = containerField.get<TestInterface>(TYPES.TestInterface);
        expect(testInterface.getName()).toBe("John Doe");
    });

    it("should inject a class in the constructor", () => {
        const testInterface: TestInterface = containerConstructor.get<TestInterface>(TYPES.TestInterface);
        expect(testInterface.getName()).toBe("John Doe");
    });
});