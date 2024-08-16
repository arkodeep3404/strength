import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
      <Stack.Screen
          name="tab6"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tab7"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab8"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
