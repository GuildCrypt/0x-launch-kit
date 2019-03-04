import MainController from './controllers/Main.js'
import ConfigController from './controllers/Config.js'
import AssetDirective from './directives/asset.js'
import OrdersDirective from './directives/orders.js'
import OrderDirective from './directives/Order.js'
import NumericDirective from './directives/Numeric.js'
import PairDirective from './directives/Pair.js'
import fetchName from './utils/fetchName.js'
import router from './router.js'

const app = angular.module('app', [])

app.run(($rootScope) => {
  fetchName().then((name) => {
    $rootScope.name = name
    $rootScope.$apply()
  })
})

app.controller('MainController', MainController)
app.controller('ConfigController', ConfigController)
app.directive('asset', AssetDirective)
app.directive('orders', OrdersDirective)
app.directive('order', OrderDirective)
app.directive('numeric', NumericDirective)
app.directive('pair', PairDirective)

app.filter('decimate', () => {
  return function decimate(bignumber, decimalMultiplier, decimalPlaces) {
    console.log(decimalMultiplier, decimalPlaces)
    return bignumber.div(decimalMultiplier).decimalPlaces(decimalPlaces)
  }
})
