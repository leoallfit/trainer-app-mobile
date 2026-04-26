import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { ScreenContainer } from "@/components/screen-container";

export default function CalendarScreen() {
  return (
    <ScreenContainer className="p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-6">
          <View className="gap-1">
            <Text className="text-3xl font-bold text-foreground">Calendario</Text>
            <Text className="text-base text-muted">Abril 2026</Text>
          </View>

          <View className="bg-surface rounded-xl p-4 border border-border gap-4">
            <View className="gap-2">
              <Text className="text-lg font-semibold text-foreground">Próximos Entrenamientos</Text>
              <TouchableOpacity className="bg-primary/10 rounded-lg p-3">
                <Text className="text-sm font-semibold text-primary">Lunes - Pecho y Tríceps</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-primary/10 rounded-lg p-3">
                <Text className="text-sm font-semibold text-primary">Miércoles - Espalda y Bíceps</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-primary/10 rounded-lg p-3">
                <Text className="text-sm font-semibold text-primary">Viernes - Piernas</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
