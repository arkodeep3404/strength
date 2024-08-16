import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab16"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tab17"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab18"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
