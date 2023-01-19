import { ActivityIndicator, View } from "react-native";
import colors from 'tailwindcss/colors'

export function Loading() {
  return (
    <View className="flex justify-center items-center bg-background">
      <ActivityIndicator size={50} color={colors.violet[900]} />
    </View>
  )
}