export default function validateListable(field, pojo, validate) {
  if (pojo.type === 'none' || pojo.type === 'all') {
    if ('value' in pojo) {
      alert(`When "${field}" is "${pojo.type}", value should be empty`)
      return false
    } else {
      return true
    }
  }
  if (pojo.value.length === 0) {
    alert(`When "${field}" is "${pojo.type}", must have least one value`)
    return false
  }

  let isValid = true
  _.forEach(pojo.value, (value) => {
    if (!validate(value)) {
      alert(`Invalid "${field}": "${value}"`)
      isValid = false
      return false
    }
  })
  return isValid
}
