import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-primary dark:bg-dark-mode">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
