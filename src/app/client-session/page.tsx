'use client';

import { useSession } from 'next-auth/react';

export default function ClientSession() {
  const { data: session, status } = useSession();
  return (
    <div>
      User: {status}
      {status === 'authenticated' && ` ${session.user?.name}`}
    </div>
  );
}
