import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'QR Code Generator',
  description: '簡単にQRコードを作成するサイトです',
  openGraph: {
    title: 'QR Code Generator',
    description: '簡単にQRコードを作成するサイトです',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analyticsタグの追加 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VK1ERK0DF1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VK1ERK0DF1');
          `}
        </Script>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}