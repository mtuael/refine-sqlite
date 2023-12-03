import {dataProvider} from "../../src/"

describe("getOne", () => {
    const apiUrl = "./test/test.db";

    it("correct response", () => {
        const response = dataProvider(apiUrl)
            .getOne({ resource: "posts", id: "2" });

        const { data } = response;

        expect(data.id).toBe(2);
        expect(data.title).toBe("Quia ducimus voluptate.");
    });
});
