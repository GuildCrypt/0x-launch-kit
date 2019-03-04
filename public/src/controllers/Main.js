import router from '../router.js'
import Erc20Asset from '../Erc20Asset.js'

export default function MainController($scope) {
  const router = new Navigo(null, true, '#!')

  router
    .on('/pairs/erc20/erc20/:baseAssetAddress/:quoteAssetAddress', (params) => {
      $scope.router = {
        page: '/pairs/erc20/erc20/',
        params: params
      }
      $scope.baseAsset = new Erc20Asset(params.baseAssetAddress)
      $scope.quoteAsset = new Erc20Asset(params.quoteAssetAddress)
    })
    .resolve()

}
