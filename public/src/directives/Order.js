export default function OrderDirective() {
  return {
    scope: false,
    templateUrl: `/templates/order.html`,
    link: function ($scope) {
      $scope.order.fetchDecimatedMakerAssetAmount().then((decimatedMakerAssetAmount) => {
        $scope.decimatedMakerAssetAmount = decimatedMakerAssetAmount
        $scope.$apply()
      })
    }
  }
}
