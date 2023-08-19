import { getServerSession } from 'next-auth';
import { AuthOptions } from './lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(AuthOptions);

  if (!session) {
    return redirect('/api/auth/signin');
  }

  return (
    <main className="flex h-screen antialiased w-screen justify-center p-6">
      <div>
        <h1>Home Page - Logged Area</h1>
        <p>{session.user?.email}</p>
      </div>
    </main>
  );
}
