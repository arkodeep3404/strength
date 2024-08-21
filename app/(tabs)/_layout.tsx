import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab1"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="goal" options={{ headerShown: false }} />
        <Stack.Screen name="attempt" options={{ headerShown: false }} />
        <Stack.Screen name="foul" options={{ headerShown: false }} />
        <Stack.Screen name="throw" options={{ headerShown: false }} />
        <Stack.Screen name="corner" options={{ headerShown: false }} />
        <Stack.Screen name="offside" options={{ headerShown: false }} />
        <Stack.Screen name="card" options={{ headerShown: false }} />
        <Stack.Screen name="substitution" options={{ headerShown: false }} />
        <Stack.Screen name="penalty" options={{ headerShown: false }} />
        <Stack.Screen name="freekick" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
