import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab19"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tab20"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
