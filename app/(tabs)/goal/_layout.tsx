import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab2"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab3"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab4"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="tab5"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
