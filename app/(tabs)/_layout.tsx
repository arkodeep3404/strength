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
        <Stack.Screen name="throw" options={{ headerShown: false }} />
        <Stack.Screen name="corner" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
