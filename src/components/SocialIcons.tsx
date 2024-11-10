import { socialItems } from "@/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="mx-1 flex items-center gap-4">
      {socialItems.map((item) => (
        <Button
          asChild={item.isLink}
          variant="ghost"
          className="p-0 text-muted-foreground"
          key={item.name}
        >
          {item.isLink ? (
            <Link href={item.url!} target="_blank">
              <item.icon className="!size-6" />
            </Link>
          ) : (
            <item.icon className="!size-6" />
          )}
        </Button>
      ))}
    </div>
  );
};

export default SocialIcons;
