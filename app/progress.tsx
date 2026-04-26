import { ScrollView, Text, View, TouchableOpacity, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";

interface ProgressEntry {
  date: string;
  weight: number;
  chest?: number;
  waist?: number;
  hips?: number;
}

export default function ProgressScreen() {
  const [entries, setEntries] = useState<ProgressEntry[]>([
    { date: "26 Abr", weight: 75.5, chest: 105, waist: 82, hips: 95 },
    { date: "25 Abr", weight: 75.8, chest: 105, waist: 83, hips: 95 },
    { date: "24 Abr", weight: 76.0, chest: 104, waist: 83, hips: 96 },
    { date: "23 Abr", weight: 76.2, chest: 104, waist: 84, hips: 96 },
  ]);

  const [newWeight, setNewWeight] = useState("");
  const [showMeasures, setShowMeasures] = useState(false);

  const addWeight = () => {
    if (newWeight.trim()) {
      const today = new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "short" });
      setEntries([{ date: today, weight: parseFloat(newWeight) }, ...entries]);
      setNewWeight("");
    }
  };

  const latestWeight = entries[0]?.weight || 0;
  const previousWeight = entries[1]?.weight || latestWeight;
  const weightChange = latestWeight - previousWeight;

  return (
    <ScreenContainer className="p-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-6">
          {/* Header */}
          <View className="gap-1">
            <Text className="text-3xl font-bold text-foreground">Mi Progreso</Text>
            <Text className="text-base text-muted">Seguimiento de peso y medidas</Text>
          </View>

          {/* Weight Card */}
          <View className="bg-surface rounded-2xl p-6 border border-border gap-4">
            <View className="gap-1">
              <Text className="text-sm font-semibold text-primary uppercase">Peso Actual</Text>
              <View className="flex-row items-baseline gap-2">
                <Text className="text-4xl font-bold text-foreground">{latestWeight}</Text>
                <Text className="text-lg text-muted">kg</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <View className={`px-3 py-1 rounded-full ${weightChange > 0 ? 'bg-error/10' : 'bg-success/10'}`}>
                <Text className={`text-sm font-semibold ${weightChange > 0 ? 'text-error' : 'text-success'}`}>
                  {weightChange > 0 ? '+' : ''}{weightChange.toFixed(1)} kg
                </Text>
              </View>
              <Text className="text-sm text-muted">desde ayer</Text>
            </View>
          </View>

          {/* Add Weight */}
          <View className="gap-3">
            <Text className="text-lg font-semibold text-foreground">Registrar Peso</Text>
            <View className="flex-row gap-2">
              <TextInput
                placeholder="Ej: 75.5"
                value={newWeight}
                onChangeText={setNewWeight}
                keyboardType="decimal-pad"
                className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 text-foreground"
                placeholderTextColor="#999"
              />
              <Pressable
                onPress={addWeight}
                style={({ pressed }) => [{
                  backgroundColor: pressed ? '#0052A3' : '#0066CC',
                  opacity: pressed ? 0.8 : 1,
                }]}
                className="px-6 py-3 rounded-lg items-center justify-center"
              >
                <Text className="text-white font-semibold">Guardar</Text>
              </Pressable>
            </View>
          </View>

          {/* Measurements Toggle */}
          <TouchableOpacity
            onPress={() => setShowMeasures(!showMeasures)}
            className="bg-surface rounded-lg p-4 border border-border flex-row items-center justify-between"
          >
            <Text className="font-semibold text-foreground">Medidas Corporales</Text>
            <Text className="text-primary font-bold">{showMeasures ? '−' : '+'}</Text>
          </TouchableOpacity>

          {/* Measurements */}
          {showMeasures && (
            <View className="gap-3">
              <View className="grid grid-cols-2 gap-3">
                <View className="bg-surface rounded-lg p-3 border border-border">
                  <Text className="text-xs text-muted mb-1">Pecho</Text>
                  <Text className="text-2xl font-bold text-foreground">{entries[0]?.chest || 0}</Text>
                  <Text className="text-xs text-muted">cm</Text>
                </View>
                <View className="bg-surface rounded-lg p-3 border border-border">
                  <Text className="text-xs text-muted mb-1">Cintura</Text>
                  <Text className="text-2xl font-bold text-foreground">{entries[0]?.waist || 0}</Text>
                  <Text className="text-xs text-muted">cm</Text>
                </View>
                <View className="bg-surface rounded-lg p-3 border border-border">
                  <Text className="text-xs text-muted mb-1">Cadera</Text>
                  <Text className="text-2xl font-bold text-foreground">{entries[0]?.hips || 0}</Text>
                  <Text className="text-xs text-muted">cm</Text>
                </View>
              </View>
            </View>
          )}

          {/* History */}
          <View className="gap-3">
            <Text className="text-lg font-semibold text-foreground">Historial</Text>
            {entries.map((entry, index) => (
              <View key={index} className="bg-surface rounded-lg p-4 border border-border flex-row items-center justify-between">
                <View>
                  <Text className="font-semibold text-foreground">{entry.date}</Text>
                  <Text className="text-sm text-muted">{entry.weight} kg</Text>
                </View>
                <View className="w-12 h-12 bg-primary/10 rounded-full items-center justify-center">
                  <Text className="text-primary font-bold">{entry.weight}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
