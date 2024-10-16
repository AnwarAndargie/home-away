"use client";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";
function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {children}
    </ThemeProvider>
  );
}

export default Provider;
