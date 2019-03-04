import zeroExHttpClient from '../zeroExHttpClient.js'
import Order from '../Order.js'

export default function fetchOrders(makerAsset, takerAsset, baseAsset, quoteAsset) {
  return zeroExHttpClient.getOrdersAsync({
    makerAssetProxyId: makerAsset.assetProxyId,
    takerAssetProxyId: takerAsset.assetProxyId,
    makerAssetAddress: makerAsset.address,
    takerAssetAddress: takerAsset.address
  }).then((wrapper) => {
    return wrapper.records.map((record) => {
      return new Order(record.order, makerAsset, takerAsset, baseAsset, quoteAsset)
    })
  })
}
