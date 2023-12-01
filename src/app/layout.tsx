import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import { ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todos App',
  description: 'App de administración de tareas',
}

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          {children}
        </ConfigProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
