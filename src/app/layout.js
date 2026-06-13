import "./globals.css";

export const metadata = {
  title: "Brightwork Painting | Professional Residential & Commercial Painters",
  description: "Interior, exterior, cabinets & drywall — meticulous prep, premium paint, and a finish that lasts. Serving Greater Northgate since 2009.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
