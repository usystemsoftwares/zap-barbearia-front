"use client"

import { createContext, Dispatch, SetStateAction, useState } from "react";

type TabCtxType = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>
}

export const TabContext = createContext<TabCtxType | null>(null)

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>("")

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}