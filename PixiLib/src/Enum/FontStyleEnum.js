//regular 400 , medium 500 , bold 700

function cal (size) {
  let ratioX = Math.floor((window.innerWidth / 1920) * 10) / 10

  if (ratioX) {
    if (ratioX < 0.5) size -= 6
    else if (ratioX >= 0.5 && ratioX < 0.7) size -= 3
    else if (ratioX >= 0.7 && ratioX < 1) size -= 2
    else if (ratioX >= 1 && ratioX < 1.5) size += 0
    else if (ratioX >= 1.5) {
      size += Math.floor(ratioX / 0.5)
    }
  }

  return size
}
let size10 = cal(10),
  size12 = cal(12),
  size14 = cal(14),
  size15 = cal(15),
  size16 = cal(16),
  size17 = cal(17),
  size18 = cal(18),
  size19 = cal(19),
  size25 = cal(25),
  size30 = cal(30)

const FontStyle = Object.freeze({
  WhiteTitle: { fill: "#ffffff", fontSize: size18, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black12: { fill: "#000000", fontSize: size12, fontfamily: "Noto Sans KR", fontWeight: "500" },
  Blue12: { fill: "#4183C4", fontSize: size12, fontfamily: "Noto Sans KR", fontWeight: "500" },
  Black14: { fill: "#000000", fontSize: size14, fontfamily: "Noto Sans KR", fontWeight: "500" },
  Black14_R: { fill: "#000000", fontSize: size14, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black15_R: { fill: "#000000", fontSize: size15, fontfamily: "Noto Sans KR", fontWeight: "400" },
  White15_R: { fill: "#ffffff", fontSize: size15, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black16: { fill: "#000000", fontSize: size16, fontfamily: "Noto Sans KR", fontWeight: "600" },
  Black16_R: { fill: "#000000", fontSize: size16, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black3_16_R: { fill: "#333333", fontSize: size16, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black18_R: { fill: "#000000", fontSize: size18, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black17: { fill: "#000000", fontSize: size17, fontfamily: "Noto Sans KR", fontWeight: "600" },
  Black19: { fill: "#000000", fontSize: size19, fontfamily: "Noto Sans KR", fontWeight: "700" },
  Black30_R: { fill: "#000000", fontSize: size30, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black25_R: { fill: "#000000", fontSize: size25, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black17_R: { fill: "#000000", fontSize: size17, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Red17_R: { fill: "#E95C63", fontSize: size17, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Red17_M: { fill: "#E95C63", fontSize: size17, fontfamily: "Noto Sans KR", fontWeight: "600" },
  Red16: { fill: "#E95C63", fontSize: size16, fontfamily: "Noto Sans KR", fontWeight: "600" },
  Red14_R: { fill: "#E95C63", fontSize: size14, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Red19_R: { fill: "#E95C63", fontSize: size19, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Red19_M: { fill: "#E95C63", fontSize: size19, fontfamily: "Noto Sans KR", fontWeight: "600" },
  Red19: { fill: "#E95C63", fontSize: size19, fontfamily: "Noto Sans KR", fontWeight: "700" },
  Dark19_M: { fill: "#404040", fontSize: size19, fontfamily: "Noto Sans KR", fontWeight: "600" },
  Black19_R: { fill: "#000000", fontSize: size19, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Black16_bold: { fill: "#000000", fontSize: size16, fontfamily: "Noto Sans KR", fontWeight: "700" },
  Black14_bold: { fill: "#000000", fontSize: size14, fontfamily: "Noto Sans KR", fontWeight: "700" },
  White14: { fill: "#ffffff", fontSize: size14, fontfamily: "Noto Sans KR", fontWeight: "500" },
  White17: { fill: "#ffffff", fontSize: size17, fontfamily: "Noto Sans KR", fontWeight: "500" },
  White17_M: { fill: "#ffffff", fontSize: size17, fontfamily: "Noto Sans KR", fontWeight: "600" },
  White16: { fill: "#ffffff", fontSize: size16, fontfamily: "Noto Sans KR", fontWeight: "500" },
  GrayTitle: { fill: "#707070", fontSize: size16, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Gray12_R: { fill: "#7c7c7c", fontSize: size12, fontfamily: "Noto Sans KR", fontWeight: "400" },
  Gray12: { fill: "#7c7c7c", fontSize: size12, fontfamily: "Noto Sans KR", fontWeight: "500" },
  Gray14: { fill: "#7c7c7c", fontSize: size14, fontfamily: "Noto Sans KR", fontWeight: "500" },
  line16: { fill: "#dadada", fontSize: size16, fontfamily: "Noto Sans KR", fontWeight: "500" },
  White12: { fill: "#ffffff", fontSize: size12, fontfamily: "Noto Sans KR", fontWeight: "500" },
  White12_R: { fill: "#ffffff", fontSize: size12, fontfamily: "Noto Sans KR", fontWeight: "400" },
  White10_R: { fill: "#ffffff", fontSize: size10, fontfamily: "Noto Sans KR", fontWeight: "400" },
})
export default FontStyle
