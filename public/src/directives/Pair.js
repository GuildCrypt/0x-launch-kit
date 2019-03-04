export default function PairDirective() {
  return {
    scope: {
      baseAsset: '=pairBaseAsset',
      quoteAsset: '=pairQuoteAsset'
    },
    templateUrl: `/templates/pair.html`,
    link: function ($scope) {
      $scope.baseAsset.fetchInfo().then((info) => {
        $scope.baseAssetSymbol = info.symbol
        $scope.$apply()
      })

      $scope.quoteAsset.fetchInfo().then((info) => {
        $scope.quoteAssetSymbol = info.symbol
        $scope.$apply()
      })

      $scope.bos = 'buy'
    }
  }
}
