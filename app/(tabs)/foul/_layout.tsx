import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab28"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab29"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab30"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab31"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
