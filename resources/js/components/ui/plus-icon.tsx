import { forwardRef } from "react";

const PlusIcon = forwardRef<
  SVGSVGElement,
  { open?: boolean; className?: string }
>(({ open, className }, ref) => (
  <div
    className={`relative w-5 h-5 ${className}`}
    ref={ref}
  >
    {/* Horizontal bar */}
    <span
      className={`absolute inset-0 left-0 top-1/2 h-[2px] w-full bg-current transform transition-all duration-300 ${open ? "rotate-0" : "rotate-0"
        }`}
    />
    {/* Vertical bar */}
    <span
      className={`absolute inset-0 left-1/2 top-0 w-[2px] h-full bg-current transform transition-all duration-300 origin-center ${open ? "scale-y-0" : "scale-y-100"
        }`}
    />
  </div>
));

PlusIcon.displayName = "PlusIcon";

export default PlusIcon;
