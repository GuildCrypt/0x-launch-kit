export default function NumericDirective() {
  return {
    scope: {
      value: '=numeric',
      padLeft: '=numericPadLeft',
      padRight: '=numericPadRight'
    },
    templateUrl: `/templates/numeric.html`,
    link: function ($scope) {
      $scope.$watch('value', (value) => {
        if (!value) {
          return
        }
        const valueRounded = $scope.value.decimalPlaces($scope.padRight)
        const valueRoundedString = valueRounded.toString()
        const isDecimal = valueRoundedString.includes('.')
        const decimalsCount = isDecimal ? valueRoundedString.split('.')[1].length : 0
        const powTenCount = valueRoundedString.split('.')[0].length

        $scope.paddingLeft = '0'.repeat($scope.padLeft - powTenCount)
        $scope.valueRoundedString = valueRoundedString
        $scope.pseudoDecimal = isDecimal ? '' : '.'
        $scope.paddingRight = '0'.repeat($scope.padRight - decimalsCount)

      })
    }
  }
}
