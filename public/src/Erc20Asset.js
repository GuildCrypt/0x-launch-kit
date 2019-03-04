export default class Erc20Asset {
  constructor(address) {
    this.assetProxyId = '0xf47261b0'
    this.address = address
  }

  getEncoding() {
    if(this.encoding) {
      return this.encoding
    }
    this.encoding = ZeroEx.assetDataUtils.encodeERC20AssetData(this.address)
    return this.encoding
  }

  fetchInfo() {
    if (this.infoPromise) {
      return this.infoPromise
    }
    this.infoPromise = fetch(`/api/bookzaar/v0/assets/${this.address}`).then((response) => {
      return response.json()
    })
    return this.infoPromise
  }

  fetchTitle() {
    if (this.titlePromise) {
      return this.titlePromise
    }
    this.titlePromise = this.fetchInfo().then((info) => {
      if (info.name) {
        if (info.symbol) {
          return `${info.name} (${info.symbol})`
        } else {
          return info.name
        }
      } else {
        if (info.symbol) {
          return info.symbol
        } else {
          return this.address
        }
      }
    })
    return this.titlePromise
  }

  fetchDecimalMultipler() {
    if (this.decimalMultiplierPromise) {
      return this.decimalMultiplierPromise
    }
    this.decimalMultiplierPromise = this.fetchInfo().then((info) => {
      return ZeroEx.BigNumber(10).pow(info.decimals)
    })
    return this.decimalMultiplierPromise
  }
}
