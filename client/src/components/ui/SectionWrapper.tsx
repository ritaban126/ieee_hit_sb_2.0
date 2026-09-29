// components/ui/SectionWrapper.tsx
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return (
    <div className={`w-full px-4 md:px-16 lg:px-24 xl:px-32 ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;