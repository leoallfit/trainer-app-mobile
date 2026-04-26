import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { ScreenContainer } from "@/components/screen-container";

export default function NutritionScreen() {
  return (
    <ScreenContainer className="p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-6">
          <View className="gap-1">
            <Text className="text-3xl font-bold text-foreground">Nutrición</Text>
            <Text className="text-base text-muted">Contador de calorías</Text>
          </View>

          <View className="bg-surface rounded-xl p-6 border border-border gap-4 items-center">
            <Text className="text-4xl font-bold text-primary">1850 / 2500</Text>
            <Text className="text-sm text-muted">Calorías consumidas</Text>
            <View className="w-full h-2 bg-border rounded-full overflow-hidden">
              <View className="h-full w-3/4 bg-primary rounded-full" />
            </View>
          </View>

          <TouchableOpacity className="bg-primary rounded-lg py-3 items-center">
            <Text className="text-white font-semibold">+ Registrar Comida</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
