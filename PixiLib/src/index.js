export { default as client } from "./client"
export { default as admin } from "./admin"
export { default as setclose } from "./setclose"
export { default as close } from "./close"
export { default as edit } from "./edit"
export { default as preview } from "./preview"
export { default as peachSlide } from "./peachSlide"
if (ENV != "production") {
  console.log("난 개발모드다")
}
