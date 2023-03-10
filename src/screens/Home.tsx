import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/Header";
import { Day, DAY_COMPONENT_SIZE } from "../components/Day";
import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates';



const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateRangeDatesFromYearStart()
const minimumSize = 14 * 5
const amountOfDaysToFill = minimumSize - datesFromYearStart.length

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((day, index) => (
          <Text
            key={index}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_COMPONENT_SIZE }}
          >
            {day}
          </Text>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap">
          {

            datesFromYearStart.map(day => (
              <Day key={day.toString()} />
            ))
          }
          {
            amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_COMPONENT_SIZE, height: DAY_COMPONENT_SIZE }}
              />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}