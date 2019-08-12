import index from "./index"
describe("testing positive addresses",() => {
    test("ETH [0x8394CcDb4Ba736770B4020B060794a4cC69CDAf6] is valid",() => {
        const res = index("ETH","0x8394CcDb4Ba736770B4020B060794a4cC69CDAf6");

        expect(res).toBe(true);

    })
    test("BTC [37XbdzPPFnLD2PddUUiqsVWY2CfTXYXtEL] is valid",() => {
        const res = index("BTC","37XbdzPPFnLD2PddUUiqsVWY2CfTXYXtEL");

        expect(res).toBe(true);

    })
    test("XRP [rKLpjpCoXgLQQYQyj13zgay73rsgmzNH13] is valid",() => {
        const res = index("XRP","rPFLkxQk6xUGdGYEykqe7PR25Gr7mLHDc8","TEST");

        expect(res).toBe(true);

    })

    test("EOS [eoshuobipool] is valid",() => {
        const res = index("EOS","eoshuobipool","mine");

        expect(res).toBe(true)
    })

    // LYcj8mck83grBGM2ooamg6Q2txk5zTC6jr
    test("LTC [LYcj8mck83grBGM2ooamg6Q2txk5zTC6jr] is valid",() => {
        const res = index("LTC","LYcj8mck83grBGM2ooamg6Q2txk5zTC6jr");

        expect(res).toBe(true)
    })

    test("BCH [bitcoincash:qzalxacppk3szcak2k5elzcpank0xdfcmu4zy88k6x] is valid",() => {
        const res = index("BCH","bitcoincash:qzalxacppk3szcak2k5elzcpank0xdfcmu4zy88k6x");
        expect(res).toBe(true)
    })

    test("DASH [XqjuCuaMNpPnS1V7oqP8CQZibRXbTwDBJZ] is valid",() => {
        const res = index("DASH","XqjuCuaMNpPnS1V7oqP8CQZibRXbTwDBJZ");
        expect(res).toBe(true)
    })
})

describe("edge cases",() => {
    test("valid address, unknown ERC20 currency",() => {
        const res = index("KED","0x8394CcDb4Ba736770B4020B060794a4cC69CDAf6");

        expect(res).toBe(true)
    })
})