import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSA | Articles",
  description: "OSA's page with articles and news.",
};

export default function NewsAndStoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}