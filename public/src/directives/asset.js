import Erc20Asset from '../Erc20Asset.js'

export default function assetDirective() {
  return {
    scope: {
      asset: '=',
      label: '@?assetLabel'
    },
    templateUrl: `/templates/asset.html`,
    link: function ($scope) {
      $scope.asset.fetchInfo().then((assetInfo) => {
        $scope.assetInfo = assetInfo
        $scope.$apply()
      })
      switch($scope.assetType) {
        case 'buy':
          $scope.assetTypeText = 'Buy'
          break;
        case 'sell':
          $scope.assetTypeText = 'With'
          break;
      }

      $scope.asset.fetchTitle().then((assetTitle) => {
        $scope.assetTitle = assetTitle
        $scope.$apply()
      })
    }
  }
}
