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

    test("ETC [0x17b9D84E01cb7c8245Da2168F845A5eCa6616402] is valid",() => {
        const res = index("ETC","0x17b9D84E01cb7c8245Da2168F845A5eCa6616402");

        expect(res).toBe(true)
    })

    test("BCH [qzalxacppk3szcak2k5elzcpank0xdfcmu4zy88k6x] is valid",() => {
        const res = index("BCH","qzalxacppk3szcak2k5elzcpank0xdfcmu4zy88k6x");
        expect(res).toBe(true)
    })

    test("BCH [bitcoincash:qzalxacppk3szcak2k5elzcpank0xdfcmu4zy88k6x] is valid",() => {
        const res = index("BCH","qzalxacppk3szcak2k5elzcpank0xdfcmu4zy88k6x");
        expect(res).toBe(true)
    })

    test("BCH [1Mbq9iT2s6yRcAX73mFTHE5kcYCvq1Yytk] is valid",() => {
        const res = index("BCH","1Mbq9iT2s6yRcAX73mFTHE5kcYCvq1Yytk");
        expect(res).toBe(true)
    })

    // t1TvV7Nmxt3dPPJnKoLbJu66CKzg3Yg4gb5
    test("ZEC [t1TvV7Nmxt3dPPJnKoLbJu66CKzg3Yg4gb5] is valid",() => {
        const res = index("ZEC","t1TvV7Nmxt3dPPJnKoLbJu66CKzg3Yg4gb5");
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