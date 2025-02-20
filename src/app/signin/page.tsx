import AuthClient from "@/components/auth/AuthClient";

export default function SignIn() {
  return (
    <main className="max-w-xl mx-auto flex justify-center flex-col">
      <h1 className="text-center mt-4 mb-3 text-xl font-bold">Sign In</h1>
      <AuthClient />
    </main>
  );
}
