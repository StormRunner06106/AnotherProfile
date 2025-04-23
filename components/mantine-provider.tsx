"use client"

import type React from "react"

import { MantineProvider, createTheme } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"

// Create a theme that matches your portfolio's dark design
const theme = createTheme({
  primaryColor: "blue",
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
  primaryShade: 5,
  colorScheme: "dark",
})

export function MantineProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications position="top-right" />
      {children}
    </MantineProviderWrapper>
  )
}
