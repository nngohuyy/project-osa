import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSA | Contact",
  description: "OSA's page with contact information.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}