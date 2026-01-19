import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md px-3 py-1 text-sm outline-none transition-all shadow-xs",
        "bg-[#050b1f]/80 backdrop-blur text-white placeholder:text-gray-300",
        "border border-white/20",
        "focus-visible:border-blue-400/60 focus-visible:ring-2 focus-visible:ring-blue-400/25",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white",
        "disabled:opacity-50 disabled:pointer-events-none",
        "aria-invalid:border-red-500/60 aria-invalid:ring-red-500/20",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
