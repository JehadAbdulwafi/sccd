import Footer from '@/components/footer';
import { GuestHeader } from '@/components/guest-header';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
  name?: string;
  title?: string;
  description?: string;
}

export default function GuestLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <GuestHeader />
      {children}
      <Footer />
    </div>
  );
}
