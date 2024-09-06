import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSA | Events",
  description: "OSA's page with information about upcoming events and activities.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white pb-40">
      {children}
    </div>
  )
}