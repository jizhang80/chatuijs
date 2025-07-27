import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Head() {
  return (
    <div className="flex justify-between items-center w-full px-4 py-2">
      <div>ChatUI</div>
      <div className="flex space-x-2">
        <Button className="bg-black text-white">
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="outline">
          <Link href="/signup">Sign up for free</Link>
        </Button>
      </div>
    </div>
  );
}
