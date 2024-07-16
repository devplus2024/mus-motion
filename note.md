<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-sm  ">
            <Guitar className="w-[1rem] h-[1rem] text-[#a1a1a1]" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#a1a1a1] -translate-x-1/2  rounded-sm  ">
            <ListMusic className="w-[1rem] h-[1rem]" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#a1a1a1] translate-y-1/2 rounded-sm  ">
            <Library className="w-[1rem] h-[1rem]" />
          </div>
          <div className="absolute rounded-sm right-0 top-1/2 translate-x-1/2 text-[#a1a1a1] -translate-y-1/2  ">
            <Podcast className="w-[2rem] h-[2rem]" />

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html
lang="en"
className={`${GeistSans.className} dark_black`}
style={{ colorScheme: "dark" }} >
<body className="dark:[color-scheme:dark] overflow-x-hidden relative">
<ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
{children}
</ThemeProvider>
</body>
</html>
);
}
