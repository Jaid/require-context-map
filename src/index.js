/** @module require-context-map */

import path from "path"

import arrayToObjectKeys from "array-to-object-keys"

import parseRequireContextId from "./parseRequireContextId"

const debug = require("debug")("require-context-map")

debug("A", process.cwd())
export default (context, options) => {
  options = {
    root: path.resolve(),
    requireField: "default",
    ...options,
  }
  debug(`Options: ${JSON.stringify(options)}`)
  // const requireContext = require.context(directory, recursive, new RegExp(`${escapeStringRegexp(options.suffix)}$`))
  const contextParsed = parseRequireContextId(context.id)
  debug(`Context: ${JSON.stringify(contextParsed)}`)
  const akk = arrayToObjectKeys(context.keys(), file => {
  //  const module = require(path.join(directory, file + suffix))
    // return options.requireField !== null ? module[requireField] : module
    debug(path.join(options.root, contextParsed.base, file))
    // debug(require(path.resolve(options.root, contextParsed.base, file)))
    return ""
  })
  debug(akk)
}