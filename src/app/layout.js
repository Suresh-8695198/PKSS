import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import CustomCursor from "../components/layout/CustomCursor/CustomCursor";

export const metadata = {
  title: "PK Software Solutions | Enterprise CRM, Cloud & Corporate Training Salem",
  description: "PK Software Solutions is a leading software development, consulting, and corporate training company in Salem, India. Providing Web Development, Salesforce Consulting, and job-guaranteed training.",
  keywords: "PK Software Solutions, Web development Salem, Software development Salem, Salesforce consulting, Zoho development Deluge, HubSpot CRM, Corporate training Salem, IT placements, Salem software company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
