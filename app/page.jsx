'use client'
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/component/sidebar'), {
  ssr: false, // This will prevent SSR and only render it on the client side
});

const Main = dynamic(() => import('@/component/main'), {
  ssr: false, // This will prevent SSR and only render it on the client side
});

export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Main />
    </div>
  );
}
