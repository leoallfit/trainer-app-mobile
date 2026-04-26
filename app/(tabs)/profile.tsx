import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { ScreenContainer } from "@/components/screen-container";

export default function ProfileScreen() {
  return (
    <ScreenContainer className="p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-6">
          <View className="gap-1">
            <Text className="text-3xl font-bold text-foreground">Perfil</Text>
            <Text className="text-base text-muted">Tu información</Text>
          </View>

          <View className="bg-surface rounded-xl p-6 border border-border items-center gap-4">
            <View className="w-20 h-20 bg-primary/10 rounded-full items-center justify-center">
              <Text className="text-4xl">👤</Text>
            </View>
            <View className="items-center gap-1">
              <Text className="text-2xl font-bold text-foreground">Juan Pérez</Text>
              <Text className="text-sm text-muted">Entrenador Personal</Text>
            </View>
          </View>

          <View className="gap-3">
            <TouchableOpacity className="bg-surface rounded-lg p-4 border border-border">
              <Text className="font-semibold text-foreground">Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-surface rounded-lg p-4 border border-border">
              <Text className="font-semibold text-foreground">Configuración</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-surface rounded-lg p-4 border border-border">
              <Text className="font-semibold text-foreground">Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
