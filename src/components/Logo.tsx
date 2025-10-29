import { cn } from "@/lib/utils";

const Logo = ({ isFooter = false }: { isFooter?: boolean }) => {
  return (
    <span
      className={cn(
        "font-headline text-2xl font-bold tracking-tight",
        isFooter ? "text-primary-foreground" : "text-primary"
      )}
    >
      Forma
    </span>
  );
};

export default Logo;
