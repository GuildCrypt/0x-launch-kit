export default class Order {
  constructor(zeroExOrder, makerAsset, takerAsset, baseAsset, quoteAsset) {
    Object.assign(this, zeroExOrder)
    this.makerAsset = makerAsset
    this.takerAsset = takerAsset
    this.baseAsset = baseAsset
    this.quoteAsset = quoteAsset
    this.type = (this.makerAsset === this.quoteAsset) ? 'bid' : 'ask'
  }

  getPrice() {
    if (this.price) {
      return this.price
    }
    this.price = this.type === 'bid'
      ? this.makerAssetAmount.div(this.takerAssetAmount)
      : this.takerAssetAmount.div(this.makerAssetAmount)
    return this.price
  }

  fetchDecimatedMakerAssetAmount() {
    if (this.decimatedMakerAssetAmountPromise) {
      return this.decimatedMakerAssetAmountPromise
    }
    this.decimatedMakerAssetAmountPromise = this.makerAsset.fetchDecimalMultipler().then((decimalMultiplier) => {
      return this.makerAssetAmount.div(decimalMultiplier)
    })
    return this.decimatedMakerAssetAmountPromise
  }
}
