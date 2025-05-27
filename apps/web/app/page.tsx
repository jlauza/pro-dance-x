import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Welcome to Pro Dance X</h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link
            href={process.env.NEXT_PUBLIC_APP_ONE_URL!}
            passHref
            legacyBehavior
          >
            <Button asChild variant="outline" className="m-2">
              <a>Go to Admin Portal</a>
            </Button>
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_APP_TWO_URL!}
            passHref
            legacyBehavior
          >
            <Button asChild variant="outline" className="m-2">
              <a>Go to Student Portal</a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
