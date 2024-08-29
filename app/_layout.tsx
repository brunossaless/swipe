import theme from "@/theme";
import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import { Suspense } from "react";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </Suspense>
    </ThemeProvider>
  );
}
