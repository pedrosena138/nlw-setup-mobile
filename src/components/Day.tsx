import { Dimensions, TouchableOpacity } from "react-native";

const TOTAL_DAYS_PER_WEEK = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_COMPONENT_MARGIN_BETWEEN = 8
export const DAY_COMPONENT_SIZE = (Dimensions.get('screen').width / TOTAL_DAYS_PER_WEEK) - (SCREEN_HORIZONTAL_PADDING + 5)

export function Day() {
  return (
    <TouchableOpacity
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: DAY_COMPONENT_SIZE, height: DAY_COMPONENT_SIZE }}
      activeOpacity={0.7}
    />
  )
}