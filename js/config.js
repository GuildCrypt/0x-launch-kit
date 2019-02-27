"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:custom-no-magic-numbers
const _0x_js_1 = require("0x.js");
class Listable {
    constructor() {
        this.type = 'none';
    }
    includes(value) {
        switch (this.type) {
            case 'all':
                return true;
                break;
            case 'none':
                return false;
                break;
            case 'except':
                return this.value ? !this.value.includes(value) : true;
                break;
            case 'only':
                return this.value ? this.value.includes(value) : false;
                break;
            default:
                return false;
                break;
        }
    }
}
class Config {
    constructor(pojo) {
        this.port = 5000;
        this.networkId = 1;
        this.rpcUrl = 'https://infura.io/v3/e2c067d9717e492091d1f1d7a2ec55aa';
        this.feeRecipient = '0x0000000000000000000000000000000000000000';
        this.makerFee = new _0x_js_1.BigNumber(0);
        this.takerFee = new _0x_js_1.BigNumber(0);
        this.tokens = new Listable;
        this.geos = new Listable;
        this.makers = new Listable;
        this.orderShadowingMarginMs = 100 * 1000;
        this.permanentCleanupIntervalMs = 100 * 1000;
        this.maxPerPage = 1000;
        this.defaultErc20Precision = 18;
        if (process.env.PORT) {
            this.port = parseInt(process.env.PORT);
        }
        Object.assign(this, pojo);
    }
}
exports.default = new Config(JSON.parse(process.env.CONFIG_STRING_0));
