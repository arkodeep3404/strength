import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab21"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tab22"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab23"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
