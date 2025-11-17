import ListForm from '@/components/list-form';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/list')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-[#282c34] p-4">
        <div className=" rounded-xl p-6 w-full max-w-md">
          <ListForm />
        </div>
      </div>
    );
}
