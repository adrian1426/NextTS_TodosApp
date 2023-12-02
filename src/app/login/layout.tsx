export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "#176B87",
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