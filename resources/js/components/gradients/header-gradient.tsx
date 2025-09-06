import { cn } from "@/lib/utils";

export function HeaderGradient({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div className={'login-background-base grain-background min-h-screen md:min-h-[919px]'}></div>
    </div>
  );
}
