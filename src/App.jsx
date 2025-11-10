import React from 'react'
import Spline from '@splinetool/react-spline'
import { CheckCircle } from 'lucide-react'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode"
          style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        />
      </div>

      {/* Soft gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />

      {/* Content */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-8">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-wide uppercase backdrop-blur-sm">
            Trusted by Manufacturers Across India
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            Precision Metal Fabrication—Reliable, Strong, On‑Time.
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-base text-white/80">
            ISO‑certified processes with guaranteed quality.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition hover:bg-white/90"
            >
              Get a Quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60"
            >
              Speak with an Expert
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              'Mill Test Certificates Provided',
              '72-Hour Dispatch Guarantee',
              'Pan-India Distribution Network',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
