'use strict'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

// Combine a list into a single value, starting from an initial value.
//
// Parameters:
//   fn - (combination, currentValue) => return newCombination.
//   startValue - the starting value of the combination.
//   list - the list.
//
// Return the combination.
function reduce (fn, startValue, list) {
  if (list === undefined) {
    list = startValue
    startValue = undefined

    if (areAllNumber(list)) {
      startValue = 0
    } else if (areAllString(list)) {
      startValue = ''
    } else {
      throw new TypeError(
        'reduce: startValue is not defined and cannot be inferred'
      )
    }
  }

  var len = list.length
  var acc = startValue

  for (var i = 0; i < len; i++) {
    acc = fn(acc, list[i])
  }

  return acc
}

// Private.

function areAllNumber (list) {
  return areAllType(list, 'number')
}

function areAllString (list) {
  return areAllType(list, 'string')
}

function areAllType (list, type) {
  // TODO: use the not-yet existing #all method.
  var len = list.length

  for (var i = 0; i < len; i++) {
    if (typeof list[i] !== type) return false
  }

  return true
}

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

module.exports = reduce
