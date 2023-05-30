import { Footer } from "@/components";
import { NavigationBar } from "@/components/NavigationBar";
import React from "react";

export const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};
