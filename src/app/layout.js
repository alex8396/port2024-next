
export const metadata = {
  title: "포트폴리오 사이트 만들기 😢 Next-Site",
  description: "한가지 사이트를 다양한 프레임워크를 통해 만들어 보는 포트폴리오 사이트입니다.",
  keywords
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
