import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export const TabsListVariants = cva(" inline-flex items-center justify-start", {
  variants: {
    variant: {
      // primary is underline
      primary: "rounded-none bg-background gap-1 p-0 border-b",
      //secondary is shadcn default
      secondary: "rounded-lg bg-muted p-1 h-9",
    },
    size: {
      default: "h-fit",
      sm: "h-8  text-xs",
      lg: "h-10 ",
      icon: "h-9 w-9",
    },
    width: {
      full: "w-full",
      fit: "w-fit",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
    width: "full",
  },
});

const TabsTriggerVariants = cva(
  "inline-flex items-center font-semibold cursor-pointer justify-center whitespace-nowrap text-sm font-normal transition-all disabled:pointer-events-none data-[state=active]:text-foreground px-3",
  {
    variants: {
      variant: {
        // primary is underline
        primary:
          "bg-background border-background focus:border-primary ring-0 outline-none shadow-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary disabled:opacity-100 data-[state=active]:shadow-none rounded-none m-0 pt-1.5 pb-2 hover:bg-background-muted  px-0",
        // secondary is shadcn default
        secondary:
          "data-[state=active]:bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:shadow disabled:opacity-50 rounded-md py-1",
      },
      size: {
        default: "h-fit",
        sm: " text-xs",
        lg: "",
        icon: "h-9 w-9",
      },
      width: {
        fit: "w-fit",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      width: "fit",
    },
  }
);

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        TabsListVariants({
          variant: props.variant || "primary",
          size: props.size,
          width: props.width,
          className,
        }),
        {
          "flex-col": props.orientation === "vertical",
        }
      )}
      {...props}
    />
  );
}

function TabsTrigger({ variant = "primary", className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      asChild={false}
      className={cn(
        TabsTriggerVariants({
          variant: variant || "primary",
          size: props.size,
          width: props.width,
          className,
        })
      )}
      {...props}
    >
      {variant == "primary" ? (
        <div
          className={
            "inline-flex w-full font-semibold items-center justify-center rounded-md px-3 py-1.5 transition-colors hover:bg-muted hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          }
        >
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        '#mt-2 ring-offset-background data-[state="inactive"]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
