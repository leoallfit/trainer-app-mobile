import { ScrollView, Text, View, TouchableOpacity, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";

interface Exercise {
  id: number;
  name: string;
  series: number;
  reps: number;
  weight: string;
  completed: boolean;
}

export default function WorkoutDetailScreen() {
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: 1, name: "Press de Banca", series: 4, reps: 8, weight: "80 kg", completed: false },
    { id: 2, name: "Aperturas con Mancuernas", series: 3, reps: 10, weight: "20 kg", completed: false },
    { id: 3, name: "Fondos en Paralelas", series: 3, reps: 10, weight: "Peso corporal", completed: false },
    { id: 4, name: "Extensiones de Tríceps", series: 3, reps: 12, weight: "15 kg", completed: false },
  ]);

  const [newExercise, setNewExercise] = useState("");

  const toggleExercise = (id: number) => {
    setExercises(exercises.map(ex => ex.id === id ? { ...ex, completed: !ex.completed } : ex));
  };

  const addExercise = () => {
    if (newExercise.trim()) {
      setExercises([...exercises, {
        id: Math.max(...exercises.map(e => e.id), 0) + 1,
        name: newExercise,
        series: 3,
        reps: 10,
        weight: "0 kg",
        completed: false,
      }]);
      setNewExercise("");
    }
  };

  const completedCount = exercises.filter(e => e.completed).length;

  return (
    <ScreenContainer className="p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-6">
          {/* Header */}
          <View className="gap-2">
            <Text className="text-3xl font-bold text-foreground">Pecho y Tríceps</Text>
            <View className="flex-row items-center justify-between">
              <Text className="text-base text-muted">{completedCount} de {exercises.length} completados</Text>
              <View className="w-20 h-2 bg-border rounded-full overflow-hidden">
                <View 
                  className="h-full bg-success rounded-full" 
                  style={{ width: `${(completedCount / exercises.length) * 100}%` }}
                />
              </View>
            </View>
          </View>

          {/* Exercises List */}
          <View className="gap-3">
            {exercises.map((exercise) => (
              <Pressable
                key={exercise.id}
                onPress={() => toggleExercise(exercise.id)}
                style={({ pressed }) => [{
                  opacity: pressed ? 0.7 : 1,
                }]}
              >
                <View className={`rounded-xl p-4 border ${exercise.completed ? 'bg-success/10 border-success' : 'bg-surface border-border'}`}>
                  <View className="flex-row items-start justify-between gap-3">
                    <View className="flex-1 gap-2">
                      <Text className={`text-lg font-semibold ${exercise.completed ? 'text-success line-through' : 'text-foreground'}`}>
                        {exercise.name}
                      </Text>
                      <Text className="text-sm text-muted">
                        {exercise.series} series × {exercise.reps} reps • {exercise.weight}
                      </Text>
                    </View>
                    <View className={`w-6 h-6 rounded-full border-2 items-center justify-center ${exercise.completed ? 'bg-success border-success' : 'border-primary'}`}>
                      {exercise.completed && <Text className="text-white text-xs font-bold">✓</Text>}
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          {/* Add Exercise */}
          <View className="gap-3">
            <Text className="text-lg font-semibold text-foreground">Agregar Ejercicio</Text>
            <View className="flex-row gap-2">
              <TextInput
                placeholder="Nombre del ejercicio"
                value={newExercise}
                onChangeText={setNewExercise}
                className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
                placeholderTextColor="#999"
              />
              <Pressable
                onPress={addExercise}
                style={({ pressed }) => [{
                  backgroundColor: pressed ? '#0052A3' : '#0066CC',
                  opacity: pressed ? 0.8 : 1,
                }]}
                className="px-4 py-3 rounded-lg items-center justify-center"
              >
                <Text className="text-white font-bold">+</Text>
              </Pressable>
            </View>
          </View>

          {/* Complete Workout Button */}
          <Pressable
            style={({ pressed }) => [{
              backgroundColor: pressed ? '#0052A3' : '#0066CC',
              opacity: pressed ? 0.8 : 1,
            }]}
            className="rounded-lg py-4 items-center"
          >
            <Text className="text-white font-semibold text-lg">Marcar Entrenamiento como Completado</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
