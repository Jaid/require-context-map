
export default id => {
  const parts = id.split(" ")
  const regex = parts.pop()
  const sync = parts.pop()
  const base = parts.join(" ")
  return {
    base,
    sync,
    regex,
  }
}