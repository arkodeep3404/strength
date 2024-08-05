import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="tab1"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
