import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { ScreenContainer } from "@/components/screen-container";

export default function WorkoutsScreen() {
  const workouts = [
    { id: 1, name: "Pecho y Tríceps", exercises: 4, date: "Hoy", completed: false },
    { id: 2, name: "Espalda y Bíceps", exercises: 5, date: "Ayer", completed: true },
    { id: 3, name: "Piernas", exercises: 6, date: "Hace 2 días", completed: true },
  ];

  return (
    <ScreenContainer className="p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-6">
          <View className="gap-1">
            <Text className="text-3xl font-bold text-foreground">Entrenamientos</Text>
            <Text className="text-base text-muted">Gestiona tus rutinas</Text>
          </View>

          <TouchableOpacity className="bg-primary rounded-lg py-3 items-center">
            <Text className="text-white font-semibold">+ Nuevo Entrenamiento</Text>
          </TouchableOpacity>

          <View className="gap-3">
            {workouts.map((workout) => (
              <TouchableOpacity key={workout.id} className="bg-surface rounded-xl p-4 border border-border gap-2">
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-semibold text-foreground flex-1">{workout.name}</Text>
                  {workout.completed && <Text className="text-success font-bold">✓</Text>}
                </View>
                <Text className="text-sm text-muted">{workout.exercises} ejercicios • {workout.date}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
