import React from 'react';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 text-center mt-auto">
      <small>© {new Date().getFullYear()} My Next.js App.</small>
    </footer>
  );
}

export default Footer;
