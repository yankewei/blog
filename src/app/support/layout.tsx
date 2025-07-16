import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          text: 'Articles',
          url: '/articles',
        },
        {
          text: 'Support',
          url: '/support',
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
} 