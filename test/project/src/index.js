import path from "path"

import requireContextMap from "../../../src"

const debug = require("debug")("require-context-map")

debug("X", path.resolve())
debug("F", require.context("./animal entries", false, /\.js$/)
// #endregionexport default () => requireContextMap()