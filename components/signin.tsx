import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { auth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SignIn, SignOut } from "./auth-components";
import Link from "next/link";

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return <SignIn />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-8 h-8 rounded-full">
          <Avatar className="w-8 h-8 border border-primary">
            {session.user.image && (
              <AvatarImage
                src={session.user.image}
                alt={session.user.name?.slice(0, 2) ?? ""}
              />
            )}
            <AvatarFallback>{session.user.email}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Button className="w-full text-center" variant={"ghost"} asChild>
            <Link href={"/profile"}>Profile</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignOut />
          {/* Log out */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
