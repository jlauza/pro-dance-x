import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

const app_manager = process.env.NEXT_PUBLIC_APP_MANAGER;
const app_student = process.env.NEXT_PUBLIC_APP_STUDENT;
const app_staff = process.env.NEXT_PUBLIC_APP_STAFF;

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Welcome to Pro Dance Suite</h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href={app_manager!} passHref legacyBehavior>
            <Button asChild variant="outline" className="m-2">
              <a>Go to Manager Portal</a>
            </Button>
          </Link>
          <Link href={app_staff!} passHref legacyBehavior>
            <Button asChild variant="outline" className="m-2">
              <a>Go to Staff Portal</a>
            </Button>
          </Link>
          <Link href={app_student!} passHref legacyBehavior>
            <Button asChild variant="outline" className="m-2">
              <a>Go to Student Portal</a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
