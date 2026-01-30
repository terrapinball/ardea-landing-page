import { useState, useEffect, useRef } from 'react'

// Animated Heron SVG component with draw-on effect
function AnimatedHeron({ className = '', animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 891.732 1671.328"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={animate ? 'heron-draw heron-fill' : ''}
        stroke={animate ? 'currentColor' : 'none'}
        strokeWidth={animate ? 3 : 0}
        fill="currentColor"
        d="M501.213,166.026c-0.366,51.359-25.86,86.476-44.175,131.812c-79.972,197.963,10.702,241.244,13.877,275.692
          c0.165,1.795,0.79,2.174,2.372,3.21c11.638,7.624,16.514,18.18,31.66,20.107c21.624,2.752,46.931-8.022,89.881,46.854
          c5.443,6.955,15.309,26.359,39.489,45.408c5.124,4.037,7.001,11.017,12.317,14.904c6.663,4.873,11.59,11.582,18.189,16.6
          c2.081,1.583,3.687,5.314,5.348,8.026c3.252,5.313,8.373,9.129,10.682,15.317c1.647,4.415,5.615,8.057,9.2,11.562
          c26.76,26.164,75.04,123.87,88.453,161.151c5.346,14.86,8.947,30.222,13.928,45.188c3.851,11.57,8.427,22.885,12.322,34.339
          c6.601,19.41-1.687,24.319,12.168,64.653c19.465,56.666,18.487,86.708,21.865,153.681c5.139,11.577,6.175,20.514,13.227,75.333
          c1.674,13.009-1.448,26.076-2.313,39.09c-0.394,5.933-4.286,9.29-6.351,13.904c-0.794,1.774-3.391,3.518-5.147,1.2
          c-2.823-3.725-6.138-3.041-10.113-3.778c-18.164-3.368-80.051-50.998-85.28-63.622c-3.495-8.438-13.502-10.75-19.662-18.247
          c-13.211-16.077-40.322-59.98-42.724-41.069c-1.099,8.653,3.622,21.253,5.095,29.917c23.691,139.371-33.908,150.28-35.441,352.992
          c-0.257,33.937-24.912,24.735-29.664,11.044c-3.08-8.873-0.696-18.598,1.571-27.713c25.779-103.657,33.99-210.741,40.985-317.411
          c2.32-35.38-0.483-19.499-1.313-36.82c-0.3-6.25-2.045-12.196-2.343-18.416c-0.424-8.86-5.836-15.068-12.263-20.602
          c-1.253-1.079-1.887-2.248-3.596-0.953c-0.388,0.294-1.464,0.41-1.587,0.213c-1.535-2.465-4.635-2.539-6.738-4.165
          c-4.179-3.231-18.281-23.015-24.018-32.307c-36.543-22.573-44.721-39.58-46.097-28.294c-2.43,19.841-0.1,12.572,4.251,40.494
          c17.163,110.165,51.66,152.326,36.539,191.827c-1.52,3.97-4.077,7.767-2.142,12.392c0.214,0.512-0.324,1.44-0.686,2.076
          c-22.998,40.393-31.454,90.592-65.733,228.888c-1.035,4.176-0.259,8.219-0.517,12.301c-0.435,6.884-3.219,13.199-3.782,19.993
          c-0.588,7.097-11.381-1.331-23.947-0.47c-6.23,0.427-6.44-4.941-4.187-10.793c4.532-11.771,3.554-24.758,8.027-36.512
          c3.813-10.02,6.839-20.358,8.82-30.773c16.917-88.924,45.52-154.24,47.411-228.597c1.4-55.041,2.01-29.311-8.247-77.887
          c-35.723-169.195-22.852-101.608-47.638-155.427c-4.633-10.059-40.46-72.913-41.135-74.073
          c-42.573-73.242-57.434-70.757-64.687-101.555c-0.838-3.559-5.252-1.226-4.009-4.261c1.006-2.456,1.426-5.333,0.438-7.173
          c-4.395-8.187-0.301-39.015-4.906-52.314c-4.707-13.592-1.325-26.986-2.766-40.365c-3.324-30.854,2.26-35.15,1.542-55.755
          c-0.897-25.763-36.681-105.226-47.707-146.412c-21.836-81.559-12.848-130.866-8.957-175.737
          c17.015-196.258,77.35-158.871,81.074-238.392c0.532-11.369-8.347-38.296-10.978-42.671c-3.388-5.632-13.038-12.16-19.02-14.734
          c-16.007-6.889-64.288,1.621-81.367,4.69c-141.739,25.465-101.578,21.694-155.58,39.238
          c-16.448,5.344-111.068,39.689-115.309,33.09c-3.121-4.856,7.054-8.474,9.65-9.875c20.022-10.797,10.508-19.185,107.706-57.667
          c6.012-2.38,81.795-35.279,100.334-44.915c15.435-8.022,30.82-16.312,43.824-28.201C388.601-4.533,502.101,41.584,501.213,166.026z"
      />
    </svg>
  )
}


// Hook to detect when an element is in viewport
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

function App() {
  const [email, setEmail] = useState('')
  const [selectedTier] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  // Trigger hero fade-in after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroLoaded(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Track scroll position for nav visibility
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection observers for scroll animations
  const heroSection = useInView(0.3)

  const handleSubmit = async (e: React.FormEvent, tier?: string) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    try {
      const { joinWaitlist } = await import('./lib/supabase')
      await joinWaitlist(email, tier || selectedTier || undefined)
      setIsSubmitted(true)
    } catch (err) {
      console.error('Waitlist signup error:', err)
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      alert(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-paper text-slate-800">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-paper/80 backdrop-blur-md z-50 border-b border-sand-200 ${hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
        style={{ transition: 'all 1800ms cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AnimatedHeron className="w-8 h-8 text-slate-900" />
            <span className="text-xl font-semibold text-slate-900">Ardea</span>
          </div>
          <a
            href="#waitlist"
            className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroSection.ref} className="relative min-h-screen flex items-center justify-center pb-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
            alt="Mystic forest with fog"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability - darker behind text block */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20"></div>
        </div>

        {/* Content */}
        <div className={`relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 transition-all duration-3000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Text content */}
            <div className="flex-1 text-center">
              {/* Header: Added tracking-tight for a more sophisticated look */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
                Ardea
              </h1>

              {/* Bridge Text: Increased brightness and slightly more line height */}
              <p className="text-lg md:text-2xl text-white/75 leading-relaxed max-w-xl mx-auto text-shadow-glow">
                Simple software for the modern yoga community.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Available Now */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">What's Available Now</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Scheduling Classes</h4>
                <p className="text-slate-600">Simple, intuitive class scheduling for your regular weekly sessions and drop-in classes.</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Taking Payments</h4>
                <p className="text-slate-600">Built-in payment processing to keep everything in one place.</p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">What's Next</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Encrypted Messaging</h4>
                <p className="text-slate-600">Secure direct and group messaging for your community.</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Media Sharing</h4>
                <p className="text-slate-600">Share photos and videos with your students privately.</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">External Calendar Sync</h4>
                <p className="text-slate-600">Sync seamlessly with Google Calendar, Apple Calendar, and more.</p>
              </div>
            </div>
          </div>

          {/* Feature Vote */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Help Shape What's Next</h3>
            <p className="text-center text-slate-600 mb-8">Vote for features you'd love to see</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card rounded-xl p-6 border-2 border-sand-200 hover:border-sage-400 transition-colors cursor-pointer">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Workshops & Retreats</h4>
                <p className="text-slate-600">Plan and manage special events with ease.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-2 border-sand-200 hover:border-sage-400 transition-colors cursor-pointer">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Reporting & Analytics</h4>
                <p className="text-slate-600">Track attendance, revenue, and growth insights.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-2 border-sand-200 hover:border-sage-400 transition-colors cursor-pointer">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Custom Websites</h4>
                <p className="text-slate-600">Build your studio's online presence.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border-2 border-sand-200 hover:border-sage-400 transition-colors cursor-pointer">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">On-Demand Library</h4>
                <p className="text-slate-600">Host and share pre-recorded video classes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center md:text-left">Why Ardea?</h3>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Content */}
              <div className="flex-1 space-y-4 text-slate-600 leading-relaxed order-2 md:order-1">
                <p>
                  Yoga teachers have changed my life — ever since my first class 20 years ago. But I've seen many of them get burnt out on admin work: juggling scheduling apps, trying to find secure messaging, copying client info between platforms.
                </p>
                <p>
                  Ardea puts your classes, appointments, and community in one place. Not so you can spend more time on software, but so you can spend less.
                </p>
              </div>
              {/* Profile Image */}
              <div className="flex-shrink-0 flex flex-col items-center md:items-end order-1 md:order-2">
                <div className="relative">
                  <div className="rounded-full overflow-hidden w-56 h-56 md:w-80 md:h-80 lg:w-[21rem] lg:h-[21rem]">
                    <img
                      src="/prof_pic.jpg"
                      alt="Founder"
                      className="w-full h-full object-cover object-[center_25%]"
                    />
                  </div>
                  {/* Soft vignette overlay - fades to card background */}
                  <div className="absolute inset-0 rounded-full pointer-events-none bg-white/15" style={{ boxShadow: 'inset 0 0 40px 15px rgba(255,255,255,0.9)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA / Waitlist Section */}
      <section id="waitlist" className="py-20 px-6 bg-paper-warm">
        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                You're on the list!
              </h2>
              <p className="text-slate-600">
                Thank you for your interest. We'll be in touch soon with updates and early access.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Join the Waitlist
                </h2>
                <p className="text-lg text-slate-600">
                  Be the first to know when we launch
                </p>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-sand-200 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 text-slate-900"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sage-500 hover:bg-sage-600 disabled:bg-sage-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  {isSubmitting ? "Joining..." : "Join the Waitlist"}
                </button>
                <p className="text-center text-sm text-slate-500">
                  No spam. Just updates on our launch.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <AnimatedHeron className="w-6 h-6 text-slate-400" />
              <span className="text-white font-semibold">Ardea</span>
            </div>
            <p className="text-sm">
              From group classes to private retreats—all in one place.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="mailto:hello@ardea.app" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Ardea. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
