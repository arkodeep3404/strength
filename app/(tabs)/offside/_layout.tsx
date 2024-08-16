import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab14"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tab15"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
