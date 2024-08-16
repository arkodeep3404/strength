import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab9"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tab10"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
