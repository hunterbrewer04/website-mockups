import "./globals.css";

export const metadata = {
  title: "Brightwork Painting | Professional Residential & Commercial Painters",
  description: "Interior, exterior, cabinets & drywall — meticulous prep, premium paint, and a finish that lasts. Serving Greater Northgate since 2009.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  maximumScale: 5,
  themeColor: "#0B1C2C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ WebkitTextSizeAdjust: "100%" }}>
      <body>{children}</body>
    </html>
  );
}
