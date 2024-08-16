import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab11"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tab12"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab13"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
