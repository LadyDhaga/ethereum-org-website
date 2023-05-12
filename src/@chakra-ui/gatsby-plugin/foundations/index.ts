import colors from "./colors"
import shadows from "./shadows"
import typography from "./typography"
import spacing from "./spacing"

// Check the following link to see all the possible options:
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/index.ts
const foundations = {
  colors,
  shadows,
  ...typography,
  sizes: {
    ...spacing,
  },
  space: spacing,
}

export default foundations
