'use strict'

alert(typeof undefined) // "undefined"

alert(typeof 0) // "number"

alert(typeof 10n) // "bigint"

alert(typeof true) // "boolean"

alert(typeof "foo") // "string"

alert(typeof Symbol("id")) // "symbol"

alert(typeof Math) // "object"  (1)

alert(typeof null) // "object"  (2)

alert(typeof alert) // "function"  (3)
///////////////////////////////////////////////
alert(typeof(undefined)) // "undefined"

alert(typeof(0)) // "number"

alert(typeof(10n)) // "bigint"

alert(typeof(true)) // "boolean"

alert(typeof("foo")) // "string"

alert(typeof(Symbol("id"))) // "symbol"

alert(typeof(Math)) // "object"  (1)

alert(typeof(null)) // "object"  (2)

alert(typeof(alert)) // "function"  (3)