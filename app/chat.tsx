import { ScrollView, Text, View, TextInput, Pressable, FlatList } from "react-native";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";

interface Message {
  id: number;
  sender: "user" | "trainer";
  text: string;
  time: string;
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "trainer", text: "¡Hola! ¿Cómo fue tu entrenamiento de hoy?", time: "10:30 AM" },
    { id: 2, sender: "user", text: "Muy bien, completé todas las series sin problema", time: "10:35 AM" },
    { id: 3, sender: "trainer", text: "Excelente trabajo. Aumenta el peso en el press de banca para la próxima sesión", time: "10:36 AM" },
    { id: 4, sender: "user", text: "Perfecto, lo haré. ¿Cuánto debo aumentar?", time: "10:40 AM" },
    { id: 5, sender: "trainer", text: "Intenta con 5 kg más. Si puedes hacer 8 reps sin problema, está bien", time: "10:42 AM" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "user",
        text: newMessage,
        time: now,
      }]);
      setNewMessage("");
    }
  };

  return (
    <ScreenContainer className="p-6">
      <View className="flex-1 gap-4">
        {/* Header */}
        <View className="gap-1 pb-4 border-b border-border">
          <Text className="text-2xl font-bold text-foreground">Chat con Entrenador</Text>
          <Text className="text-sm text-muted">Juan Pérez</Text>
        </View>

        {/* Messages */}
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          onContentSizeChange={() => {}}
        >
          <View className="gap-3">
            {messages.map((msg) => (
              <View
                key={msg.id}
                className={`flex-row ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <View
                  className={`max-w-xs rounded-2xl px-4 py-2 ${
                    msg.sender === "user"
                      ? "bg-primary rounded-br-none"
                      : "bg-surface border border-border rounded-bl-none"
                  }`}
                >
                  <Text
                    className={`text-base ${
                      msg.sender === "user" ? "text-white" : "text-foreground"
                    }`}
                  >
                    {msg.text}
                  </Text>
                  <Text
                    className={`text-xs mt-1 ${
                      msg.sender === "user" ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {msg.time}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Input */}
        <View className="flex-row gap-2 border-t border-border pt-4">
          <TextInput
            placeholder="Escribe un mensaje..."
            value={newMessage}
            onChangeText={setNewMessage}
            multiline
            maxLength={500}
            className="flex-1 bg-surface border border-border rounded-full px-4 py-3 text-foreground"
            placeholderTextColor="#999"
          />
          <Pressable
            onPress={sendMessage}
            style={({ pressed }) => [{
              backgroundColor: pressed ? '#0052A3' : '#0066CC',
              opacity: pressed ? 0.8 : 1,
            }]}
            className="w-12 h-12 rounded-full items-center justify-center"
          >
            <Text className="text-white text-lg">→</Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}
