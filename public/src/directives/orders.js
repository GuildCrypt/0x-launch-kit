import fetchOrders from '../utils/fetchOrders.js'

export default function ordersDirective() {
  return {
    scope: {
      baseAsset: '=ordersBaseAsset',
      quoteAsset: '=ordersQuoteAsset',
      boa: '=ordersBoa'
    },
    templateUrl: `/templates/orders.html`,
    link: function ($scope) {

      $scope.baseAsset.fetchInfo().then((info) => {
        $scope.baseAssetSymbol = info.symbol
        $scope.$apply()
      })

      $scope.quoteAsset.fetchInfo().then((info) => {
        $scope.quoteAssetSymbol = info.symbol
        $scope.$apply()
      })

      $scope.$watch('boa', (boa) => {
        if (!boa) {
          return
        }

        const makerAsset = (boa === 'bid') ? $scope.quoteAsset : $scope.baseAsset
        const takerAsset = (boa === 'bid') ? $scope.baseAsset : $scope.quoteAsset

        makerAsset.fetchDecimalMultipler().then((decimalMultiplier) => {
          $scope.makerAssetDecimalMultiplier = decimalMultiplier
          $scope.$apply()
        })

        makerAsset.fetchInfo().then((info) => {
          $scope.makerAssetSymbol = info.symbol
          $scope.$apply()
        })

        fetchOrders(makerAsset, takerAsset, $scope.baseAsset, $scope.quoteAsset).then((orders) => {
          $scope.orders = orders.sort((a, b) => {
            const aPrice = a.getPrice()
            const bPrice = b.getPrice()
            if (boa === 'bid') {
              return bPrice.minus(aPrice).toNumber()
            } else {
              return aPrice.minus(bPrice).toNumber()
            }
          })
          $scope.$apply()
        })
      })

    }
  }
}
