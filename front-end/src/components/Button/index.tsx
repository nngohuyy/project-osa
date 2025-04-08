import { Button } from "@nextui-org/button";

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  textColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

export const CustomButton = ({
  children,
  className,
  size,
  textColor = "text-white",
  backgroundColor = "bg-[#35589F]",
  hoverBackgroundColor = "bg-[#3B6CB4]",
  startContent, endContent,
}: CustomButtonProps) => {
  return (
    <Button
      className={`px-6 py-1.5 translate-y-[-2px]
        ${backgroundColor} hover:${hoverBackgroundColor}
        rounded-md border-2 border-black
        shadow-solid hover:shadow-none
        font-bold ${textColor}
        ease-out hover:translate-y-[0px] duration-[0.15s]
        ${className}`}
      size={size}
      startContent={startContent}
      endContent={endContent}
    >
      {children}
    </Button>
  );
};