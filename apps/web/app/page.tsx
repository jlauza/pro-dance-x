import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Welcome to Pro Dance X</h1>
        <div className="flex gap-4">
          <a href="http://localhost:3001">
            <Button size="sm" className="cursor-pointer">
              Admin
            </Button>
          </a>

          <a href="http://localhost:3002">
            <Button size="sm" variant="secondary" className="cursor-pointer">
              Students
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
