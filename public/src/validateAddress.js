export default function validateAddress(address) {
  if (address.length !== 42) {
    return false
  }
  if (address.indexOf('0x') !== 0) {
    return false
  }
  return /^[0-9a-fA-F]+$/.test(address.substr(2))
}
