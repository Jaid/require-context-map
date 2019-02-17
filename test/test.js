import path from "path"

import pify from "pify"
import {configureNodeLib} from "webpack-config-jaid"
import fsp from "@absolunet/fsp"

// const indexModule = (process.env.MAIN ? path.resolve(__dirname, "..", process.env.MAIN) : path.join(__dirname, "..", "src"))
// const {default: requireContextMap} = require(indexModule)

const webpack = "webpack" |> require |> pify

it("should run", async () => {
  process.chdir(path.join(__dirname, "project"))
  const config = configureNodeLib({
  })
  process.chdir(path.resolve("../.."))
  const stats = await webpack(config)
  await fsp.outputJson5(path.join(__dirname, "project", "dist", "stats.json5"), stats.toJson(), {space: 2})
  const module = require(path.join(__dirname, "project", "dist", "package", "test", "index.js")).default
  console.log(module())
})