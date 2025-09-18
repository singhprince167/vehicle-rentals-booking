"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Recharts se required imports
import {
  TooltipProps,
  ResponsiveContainer,
} from "recharts"

// Custom Tooltip Props
interface CustomTooltipProps extends TooltipProps<any, any> {
  payload?: any[];
}

const ChartContext = React.createContext<{
  config: any
  id: string
} | null>(null)

export function Chart({
  id,
  config,
  children,
  className,
}: {
  id?: string
  config: any
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("h-[400px] w-full", className)}>
      <ChartContext.Provider value={{ config, id: id || React.useId() }}>
        <ResponsiveContainer>
          <>
            {React.Children.map(children, (child) => {
              if (!React.isValidElement(child)) return child
              return React.cloneElement(child, {
                data: (child.props as any).data,
              })
            })}
          </>
        </ResponsiveContainer>
      </ChartContext.Provider>
    </div>
  )
}

// ✅ Tooltip Content Fixed
export function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
}: CustomTooltipProps & {
  className?: string
  indicator?: "dot" | "line" | "square"
  hideLabel?: boolean
}) {
  if (!active || !payload || payload.length === 0) return null

  return (
    <div className={cn("rounded-lg border bg-white p-2 shadow-md", className)}>
      {!hideLabel && (
        <div className="mb-1 font-medium text-sm text-gray-800">
          Tooltip
        </div>
      )}
      <ul className="space-y-1 text-xs">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center gap-2">
            {indicator === "dot" && <span className="text-lg">•</span>}
            {indicator === "line" && <span className="h-px w-3 bg-black"></span>}
            {indicator === "square" && <span className="h-2 w-2 bg-black"></span>}
            <span>{entry.name}: {entry.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
