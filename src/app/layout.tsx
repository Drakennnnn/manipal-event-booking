"use client";

import { Layout } from 'antd';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>College Event Manager</title>
      </head>
      <body>
        <Layout style={{ minHeight: '100vh' }}>
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
};

export default AppLayout;
