import { ScrollView, Text, View, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";

export default function HomeScreen() {
  const [todayWorkout] = useState({
    name: "Pecho y Tríceps",
    exercises: 4,
    completed: false,
    time: "10:00 AM",
  });

  const [stats] = useState({
    caloriesGoal: 2500,
    caloriesConsumed: 1850,
    weight: "75.5 kg",
    waterIntake: "6/8 vasos",
  });

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6">
          {/* Header */}
          <View className="gap-1">
            <Text className="text-3xl font-bold text-foreground">Hola, Entrenador</Text>
            <Text className="text-base text-muted">Sábado, 26 de Abril</Text>
          </View>

          {/* Today's Workout Card */}
          <View className="bg-surface rounded-2xl p-6 border border-border gap-4">
            <View className="gap-2">
              <Text className="text-sm font-semibold text-primary uppercase">Entrenamiento de Hoy</Text>
              <Text className="text-2xl font-bold text-foreground">{todayWorkout.name}</Text>
              <Text className="text-sm text-muted">{todayWorkout.exercises} ejercicios • {todayWorkout.time}</Text>
            </View>
            <Pressable
              style={({ pressed }) => [{
                backgroundColor: pressed ? '#0052A3' : '#0066CC',
              }]}
              className="rounded-lg py-3 items-center"
            >
              <Text className="text-white font-semibold">Iniciar Entrenamiento</Text>
            </Pressable>
          </View>

          {/* Quick Stats */}
          <View className="gap-3">
            <Text className="text-lg font-semibold text-foreground">Resumen del Día</Text>
            
            {/* Calories */}
            <View className="bg-surface rounded-xl p-4 border border-border flex-row items-center justify-between">
              <View className="gap-1 flex-1">
                <Text className="text-sm text-muted">Calorías</Text>
                <Text className="text-xl font-bold text-foreground">{stats.caloriesConsumed} / {stats.caloriesGoal}</Text>
              </View>
              <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
                <Text className="text-primary font-bold">74%</Text>
              </View>
            </View>

            {/* Weight & Water */}
            <View className="flex-row gap-3">
              <View className="flex-1 bg-surface rounded-xl p-4 border border-border gap-1">
                <Text className="text-sm text-muted">Peso</Text>
                <Text className="text-lg font-bold text-foreground">{stats.weight}</Text>
              </View>
              <View className="flex-1 bg-surface rounded-xl p-4 border border-border gap-1">
                <Text className="text-sm text-muted">Agua</Text>
                <Text className="text-lg font-bold text-foreground">{stats.waterIntake}</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="gap-3">
            <Text className="text-lg font-semibold text-foreground">Acciones Rápidas</Text>
            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 bg-surface rounded-xl p-4 border border-border items-center gap-2">
                <Text className="text-2xl">🏋️</Text>
                <Text className="text-sm font-semibold text-foreground text-center">Registrar Ejercicio</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-surface rounded-xl p-4 border border-border items-center gap-2">
                <Text className="text-2xl">📊</Text>
                <Text className="text-sm font-semibold text-foreground text-center">Mi Progreso</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
