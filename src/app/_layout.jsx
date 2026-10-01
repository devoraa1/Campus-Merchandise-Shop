import { Stack } from 'expo-router'
import { BasketProvider } from '../context/BasketContext'

export default function RootLayout() {
  return (
    <BasketProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </BasketProvider>
  )
}