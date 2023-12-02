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
      <body className="h-screen bg-light_brown">{children}</body>
    </html>
  );
};

export default RootLayout;
