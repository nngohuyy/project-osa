import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSA | Articles",
  description: "OSA's page with articles and news.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white pb-40">
      {children}
    </div>
  );
}