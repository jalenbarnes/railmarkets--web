export default function ProtectedAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen bg-[#0a0a0a] text-white">{children}</main>
}
