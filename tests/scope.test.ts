import { Container, Injectable } from "../lib";
import { Sleep } from "@felipeflohr/flohr-common-utils";

interface DateInterface {
    getDate(): Date
}

const TYPES = {
    DateInterface: Symbol("DateInterface")
};

@Injectable()
class DateDTO implements DateInterface {
    private readonly date: Date;

    public constructor() {
        this.date = new Date();
    }

    public getDate(): Date {
        return this.date;
    }
}

describe("Scope tests", () => {
    let singletonContainer: Container;
    let transientContainer: Container;

    beforeAll(() => {
        singletonContainer = new Container();
        singletonContainer.bind<DateInterface>(TYPES.DateInterface).toSingleton(DateDTO);

        transientContainer = new Container();
        transientContainer.bind<DateInterface>(TYPES.DateInterface).toTransient(DateDTO);
    });

    it("should create a singleton instance", async () => {
        const first = singletonContainer.get<DateInterface>(TYPES.DateInterface);
        await Sleep.sleep(500);
        const second = singletonContainer.get<DateInterface>(TYPES.DateInterface);

        expect(first.getDate().getTime() === second.getDate().getTime()).toBeTruthy();
    });

    it("should create transient instances", async () => {
        const first = transientContainer.get<DateInterface>(TYPES.DateInterface);
        await Sleep.sleep(500);
        const second = transientContainer.get<DateInterface>(TYPES.DateInterface);

        expect(first.getDate().getTime() !== second.getDate().getTime()).toBeTruthy();
    });
});
