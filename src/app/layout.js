import '../globals.css';

export const metadata = {
  title: 'photography',
  description: 'Photography portfolio and blog',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
