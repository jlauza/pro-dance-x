import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Welcome to Pro Dance X</h1>
        <div className="flex gap-4">
          <Button size="sm" className="cursor-pointer">
            Admin
          </Button>
          <Button size="sm" variant="secondary" className="cursor-pointer">
            Students
          </Button>
        </div>
      </div>
    </div>
  );
}
