// tslint:disable:custom-no-magic-numbers
import { BigNumber } from '0x.js';
import * as _ from 'lodash';
import * as fs from 'fs';

class Listable {
  type: string = 'none';
  value?: string[];

  public includes(value: string): boolean {
    switch(this.type) {
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
  bookzaarVersion: string = '0.0.0';
  networkId: number = 1;
  rpcUrl: string = 'https://infura.io/v3/e2c067d9717e492091d1f1d7a2ec55aa';
  feeRecipient: string = '0x0000000000000000000000000000000000000000';
  makerFee: BigNumber = new BigNumber(0);
  takerFee: BigNumber = new BigNumber(0);
  tokens: Listable = new Listable;
  geos: Listable = new Listable;
  orderShadowingMarginMs: number = 100 * 1000;
  permanentCleanupIntervalMs: number = 100 * 1000;
  maxPerPage: number = 1000;
  defaultErc20Precision: number = 18;

  constructor(pojo: object) {
    this.bookzaarVersion = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version

    Object.assign(this, pojo)
  }
}

export default new Config(JSON.parse(process.env.CONFIG_STRING_0!));
