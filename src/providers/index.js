import { ConfraternizationProvider } from "./confraternization/confraternization";
import { DrinksProvider } from "./drinks/drinks";
import { GraduationProvider } from "./graduation/graduation";
import { WeddingProvider } from "./wedding/wedding";

export const Providers = ({ children }) => {
  return (
    <DrinksProvider>
      <ConfraternizationProvider>
        <GraduationProvider>
          <WeddingProvider>{children}</WeddingProvider>
        </GraduationProvider>
      </ConfraternizationProvider>
    </DrinksProvider>
  );
};
