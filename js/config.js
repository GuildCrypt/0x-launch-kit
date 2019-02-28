"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:custom-no-magic-numbers
const _0x_js_1 = require("0x.js");
const fs = require("fs");
class Listable {
    constructor() {
        this.type = 'only';
        this.value = [];
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
                return !this.value.includes(value);
                break;
            case 'only':
                return this.value.includes(value);
                break;
            default:
                return false;
                break;
        }
    }
}
class Config {
    constructor(pojo) {
        this.bookzaarVersion = '0.0.0';
        this.networkId = 1;
        this.rpcUrl = 'https://infura.io/v3/e2c067d9717e492091d1f1d7a2ec55aa';
        this.feeRecipient = '0x0000000000000000000000000000000000000000';
        this.makerFee = new _0x_js_1.BigNumber(0);
        this.takerFee = new _0x_js_1.BigNumber(0);
        this.tokens = new Listable;
        this.countries = new Listable;
        this.orderShadowingMarginMs = 100 * 1000;
        this.permanentCleanupIntervalMs = 100 * 1000;
        this.maxPerPage = 1000;
        this.defaultErc20Precision = 18;
        this.bookzaarVersion = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
        Object.assign(this, pojo);
    }
}
exports.default = new Config(JSON.parse(process.env.CONFIG_STRING_0));
