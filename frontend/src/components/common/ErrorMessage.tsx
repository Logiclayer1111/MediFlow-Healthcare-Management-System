export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
      <p className="text-red-700">{message}</p>
    </div>
  );
}
