"use client";

import { socialItems } from "@/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

const SocialIcons = () => {
  const { toast } = useToast();

  const handleToast = (message: string, clipboardText: string) => {
    toast({
      description: message,
    });

    navigator.clipboard.writeText(clipboardText);
  };

  return (
    <div className="mx-1 flex items-center gap-4">
      {socialItems.map((item) => (
        <Button
          asChild={item.isLink}
          variant="ghost"
          className="-mx-4 p-4 text-muted-foreground hover:bg-transparent"
          key={item.name}
          onClick={
            item.toast
              ? () =>
                  handleToast(item.toast!.message, item.toast!.clipboardText)
              : undefined
          }
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
