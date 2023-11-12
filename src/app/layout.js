import Head from 'next/head';
import '../globals.css';

export const metadata = {
  title: 'photography',
  description: 'Photography portfolio and blog',
  icons: {
    icon: '/favicon.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="h-screen bg-lightBrown">{children}</body>
    </html>
  );
};

export default RootLayout;
