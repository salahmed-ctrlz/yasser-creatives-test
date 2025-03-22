<<<<<<< HEAD
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"
=======
import * as React from "react"
import { GripVertical } from "lucide-react"
>>>>>>> 6008eb6 (Initial commit)

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
<<<<<<< HEAD
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
=======
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
>>>>>>> 6008eb6 (Initial commit)
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)
<<<<<<< HEAD

const ResizablePanel = ResizablePrimitive.Panel
=======
ResizablePanelGroup.displayName = "ResizablePanelGroup"

const ResizablePanel = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex h-full w-full flex-col data-[panel-group-direction=vertical]:h-full",
      className
    )}
    {...props}
  />
)
ResizablePanel.displayName = "ResizablePanel"
>>>>>>> 6008eb6 (Initial commit)

const ResizableHandle = ({
  withHandle,
  className,
  ...props
<<<<<<< HEAD
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
=======
}: React.HTMLAttributes<HTMLDivElement> & {
  withHandle?: boolean
}) => (
  <div
>>>>>>> 6008eb6 (Initial commit)
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
<<<<<<< HEAD
  </ResizablePrimitive.PanelResizeHandle>
)
=======
  </div>
)
ResizableHandle.displayName = "ResizableHandle"
>>>>>>> 6008eb6 (Initial commit)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
