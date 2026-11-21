import { Playball, Lora, Poppins } from "next/font/google";
import "./globals.css";

const playball = Playball({
  variable: "--font-playball",
  weight: "400",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sandhya Plastic",
  description:
    "Discover premium pots designed to elevate your plants and enhance modern living spaces with timeless elegance.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-US"
      className={`${playball.variable} ${lora.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
