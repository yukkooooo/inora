import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl lg:text-8xl font-light text-inora-dark mb-4">
            inora
          </h1>
          <p className="text-lg text-inora-gray mb-6 tracking-wider">
            FOR MODERN LIFE
          </p>
          <p className="text-base text-inora-gray mb-8 leading-relaxed max-w-md mx-auto">
            BRIGHTENING YOUR EVERYDAY<br />
            ONE PRAYER AT A TIME
          </p>
          <Link
            href="/inora-book"
            className="inline-block border border-inora-gray px-8 py-2 text-inora-gray hover:bg-inora-gray hover:text-white transition-colors"
          >
            MORE →
          </Link>
        </div>
      </section>
    </main>
  )
}
