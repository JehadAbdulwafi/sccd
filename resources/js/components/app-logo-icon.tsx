import { cn } from "@/lib/utils";

export default function AppLogoIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/images/logo.png"
      alt="logo"
      className={cn("h-14", props.className)}
      {...props}
    />
  );
}
