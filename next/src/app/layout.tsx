import ApolloWrapper from "./apollowrapper";
import MobileSidebar from "./MobileSidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the children with the ApolloWrapper */}
        <ApolloWrapper>
          <MobileSidebar/>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
