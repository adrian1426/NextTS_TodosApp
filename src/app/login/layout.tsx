export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "linear-gradient(#053B50,#176B87,#64CCC5)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  )
}