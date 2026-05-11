'use client';

import dynamic from 'next/dynamic';

const WeddingInvitation = dynamic(() => import('@/components/WeddingInvitation'), { ssr: false });

export default function Home() {
  return <WeddingInvitation />;
}
