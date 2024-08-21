import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab24"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab25"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab26"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab27"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
