export default function FeedPage() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white p-10">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="text-3xl font-semibold tracking-tight">Live Feed</h1>
        <p className="mt-3 text-sm text-gray-400">
          Minimal protected route test page.
        </p>
        <div className="mt-6 rounded-xl border border-[#d95e14]/30 bg-[#d95e14]/10 p-4 text-sm text-[#f4a261]">
          Protected app route is rendering successfully.
        </div>
      </div>
    </section>
  )
}
