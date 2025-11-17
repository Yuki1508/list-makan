import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "../components/login-form";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#282c34] p-4">
      <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
