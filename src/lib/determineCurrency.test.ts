import determineCurrency from "./determineCurrency"
describe("testing determineCurrency",() => {
    test("works for btc",() => {
        const res = determineCurrency("BTC");

        expect(res.symbol).toBe("BTC");
    })

    test("assumes an unknown is ETH",() => {
        const res = determineCurrency("KED");

        expect(res.symbol).toBe("ETH");
    })
})