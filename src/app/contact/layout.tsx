import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jerry's portfolio | Engineer",
  description: "Jerry Nguyen portfolio's engineer page with information about projects and technical skills",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}