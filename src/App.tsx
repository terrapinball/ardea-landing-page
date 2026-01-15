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

  // Intersection observers for scroll animations
  const heroSection = useInView(0.3)
  const painPointsSection = useInView(0.1)
  const featuresSection = useInView(0.1)
  const pricingSection = useInView(0.1)

  const handleSubmit = async (e: React.FormEvent, tier?: string) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate API call - replace with actual waitlist endpoint
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Waitlist signup:', { email, tier: tier || selectedTier })
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-paper text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-paper/80 backdrop-blur-md z-50 border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AnimatedHeron className="w-8 h-8 text-slate-900" />
            <span className="text-xl font-semibold text-slate-900">Ardea</span>
          </div>
          <a
            href="#waitlist"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-5 py-2 rounded-lg font-medium transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroSection.ref} className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 text-center lg:text-left">
                Stop Playing Software Tetris. Start Teaching Again.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-4 text-center lg:text-left mx-auto lg:mx-0">
                The <span className="font-semibold text-slate-800">first all-in-one workspace for wellness.</span> Manage classes, 1-on-1s, and complex events—without the 'app fatigue.'
              </p>
              <div className="text-center">
                <a
                  href="#waitlist"
                  className="inline-block bg-sage-500 hover:bg-sage-600 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-sage-500/25"
                >
                  Join the Waitlist
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>One unified calendar</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>You own your data</span>
                </div>
              </div>
            </div>
            {/* Right side - Image */}
            <div className="flex-1 max-w-lg lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80"
                alt="Mystic forest with fog"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section ref={painPointsSection.ref} className="py-20 px-6 bg-paper-warm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The reality most studio owners face
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              You got into wellness to <span className="font-semibold text-slate-800">help people heal</span>—not to become a <span className="font-semibold text-slate-800">spreadsheet wizard</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`glass-card rounded-2xl p-8 text-center md:text-left ${painPointsSection.isInView ? 'animate-fade-in-up animate-delay-1' : 'opacity-0'}`}>
              <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                The 'Patchwork' Tax
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Mindbody for classes. Google Calendar for appointments. A spreadsheet for retreats. When your business is <span className="font-semibold text-slate-800">scattered across the universe</span>, double-booking isn't a risk—it's an <span className="font-semibold text-slate-800">inevitability</span>.
              </p>
            </div>

            <div className={`glass-card rounded-2xl p-8 text-center md:text-left ${painPointsSection.isInView ? 'animate-fade-in-up animate-delay-2' : 'opacity-0'}`}>
              <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Sensitive Data in Unsafe Places
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A student texts you about a back injury; another DMs on Instagram about anxiety medication. These are <span className="font-semibold text-slate-800">private health details</span>—not social media content. Ardea keeps your <span className="font-semibold text-slate-800">professional boundaries</span>—and your clients' privacy—intact.
              </p>
            </div>

            <div className={`glass-card rounded-2xl p-8 text-center md:text-left ${painPointsSection.isInView ? 'animate-fade-in-up animate-delay-3' : 'opacity-0'}`}>
              <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Death by a Thousand Admin Tasks
              </h3>
              <p className="text-slate-600 leading-relaxed">
                You're spending hours a week <span className="font-semibold text-slate-800">hunting for waivers</span> and manually <span className="font-semibold text-slate-800">reconciling deposits</span>. That's time you could spend doing <span className="font-semibold text-slate-800">what you really want to do</span>.
              </p>
            </div>

            <div className={`glass-card rounded-2xl p-8 text-center md:text-left ${painPointsSection.isInView ? 'animate-fade-in-up animate-delay-4' : 'opacity-0'}`}>
              <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-6 h-6 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                The Retreat Planning Chaos
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Most software wasn't built for <span className="font-semibold text-slate-800">room selections</span> or <span className="font-semibold text-slate-800">dietary forms</span>. You're left manually chasing attendees and managing complex deposits. Ardea treats retreats like the <span className="font-semibold text-slate-800">core business</span> they are, not an afterthought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresSection.ref} className="py-20 px-6 bg-paper">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sage-500 font-medium mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything in One Place. Finally.
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built for the way wellness<span className="font-semibold text-slate-800">actually works</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className={`glass-card rounded-2xl p-8 ${featuresSection.isInView ? 'animate-fade-in-up animate-delay-1' : 'opacity-0'}`}>
              <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                The Master Calendar
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Keep using the tools you love. Ardea features a <span className="font-semibold text-slate-800">seamless, two-way sync</span> with Google, Apple,
                and Outlook calendars. Pull in your personal appointments and push your Ardea sessions out,
                so your <span className="font-semibold text-slate-800">entire life stays in sync—no manual updates required</span>.
              </p>
              <p className="text-sage-500 font-medium text-sm">
                Universal Calendar View
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className={`glass-card rounded-2xl p-8 ${featuresSection.isInView ? 'animate-fade-in-up animate-delay-2' : 'opacity-0'}`}>
              <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Retreat & Event Management
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Launch workshops and retreats <span className="font-semibold text-slate-800">without the spreadsheet chaos</span>. Custom booking flows,
                deposit handling, room selections, dietary intake forms, and attendee management—all
                built in. <span className="font-semibold text-slate-800">Focus on the experience, not the logistics.</span>
              </p>
              <p className="text-sage-500 font-medium text-sm">
                Retreats Made Simple
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className={`glass-card rounded-2xl p-8 ${featuresSection.isInView ? 'animate-fade-in-up animate-delay-3' : 'opacity-0'}`}>
              <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                E2EE Secure Messaging
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                End-to-end encrypted with the <span className="font-semibold text-slate-800">Signal Protocol</span>. Your clients' sensitive health disclosures
                live only as long as they need to—leaving <span className="font-semibold text-slate-800">no digital trail</span> for hackers, third parties,
                or advertisers to exploit. We don't just "not sell" data—we built a system where there's <span className="font-semibold text-slate-800">nothing to sell</span>.
              </p>
              <p className="text-sage-500 font-medium text-sm">
                Privacy-First Communication
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
              <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-slate-700 font-medium">Signal Protocol Encryption</span>
            </div>
            <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
              <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="text-slate-700 font-medium">Ephemeral Storage</span>
            </div>
            <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
              <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="text-slate-700 font-medium">One-Tap Vault Export</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingSection.ref} id="pricing" className="py-20 px-6 bg-paper-warm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sage-500 font-medium mb-3">Founding Member Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Lock in your founding rate for life. Join now and never pay more as we grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1: Independent */}
            <div className={`soft-card bg-paper rounded-2xl p-8 border border-sand-200 ${pricingSection.isInView ? 'animate-fade-in-up animate-delay-1' : 'opacity-0'}`}>
              <p className="text-sage-500 font-medium mb-2">The Independent</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">$<span className="text-lg font-normal text-slate-500">/month</span></h3>
              <p className="text-sm text-sand-500 bg-sand-100 inline-block px-2 py-0.5 rounded font-medium mb-6">Founding Rate</p>
              <p className="text-slate-600 mb-8">
                You + a partner
              </p>
              <a
                href="#waitlist"
                className="block w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-xl font-semibold transition-colors text-center"
              >
                Yes
              </a>
            </div>

            {/* Tier 2: The Unified Studio */}
            <div className={`soft-card bg-sage-500 rounded-2xl p-8 text-white relative ${pricingSection.isInView ? 'animate-fade-in-up animate-delay-2' : 'opacity-0'}`}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                Most Popular
              </div>
              <p className="text-sage-100 font-medium mb-2">The Unified Studio</p>
              <h3 className="text-2xl font-bold mb-2">$<span className="text-lg font-normal text-sage-200">/month</span></h3>
              <p className="text-sm text-sand-200 bg-sage-600 inline-block px-2 py-0.5 rounded font-medium mb-6">Founding Rate</p>
              <p className="text-sage-100 mb-8">
                Up to 5 users
              </p>
              <a
                href="#waitlist"
                className="block w-full bg-white hover:bg-sage-50 text-sage-600 py-3 rounded-xl font-semibold transition-colors text-center"
              >
                I'm interested
              </a>
            </div>

            {/* Tier 3: The Cooperative */}
            <div className={`soft-card bg-paper rounded-2xl p-8 border border-sand-200 ${pricingSection.isInView ? 'animate-fade-in-up animate-delay-3' : 'opacity-0'}`}>
              <p className="text-sage-500 font-medium mb-2">The Cooperative</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">$<span className="text-lg font-normal text-slate-500">/month</span></h3>
              <p className="text-sm text-sand-500 bg-sand-100 inline-block px-2 py-0.5 rounded font-medium mb-6">Founding Rate</p>
              <p className="text-slate-600 mb-8">
                Your entire staff
              </p>
              <a
                href="#waitlist"
                className="block w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-xl font-semibold transition-colors text-center"
              >
                Sign me up!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">A Note from the Founder</h3>
              </div>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                A close friend of mine is a yoga teacher, a healer, and a leader in her community. But behind the scenes, she's forced to be a "software integrator." She's constantly juggling different systems for her classes, massage appointments, and retreats.
              </p>
              <p>
                <span className="font-semibold text-slate-800">It seems ironic.</span> The people who teach us how to breathe and find balance are tethered to a patchwork of clunky tools. Tools that weren't designed for the way people actually work—they were just the only options available.
              </p>
              <p>
                I believe technology should work for you. It should be creative, intuitive, and—above all—simple.
              </p>
              <p>
                I'm building Ardea to bridge that gap. By bringing your classes, 1-on-1s, and events into one unified space, we're doing more than just fixing a scheduling problem. We're protecting your time and your clients' privacy so you can get back to what actually matters: <span className="font-semibold text-slate-800">helping your community thrive</span>.
              </p>
              <p>
                You've spent enough time being a spreadsheet wizard. It's time to get back to the studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Waitlist Section */}
      <section id="waitlist" className="py-20 px-6 bg-sage-500">
        <div className="max-w-2xl mx-auto text-center">
          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                You're on the list!
              </h2>
              <p className="text-slate-600">
                Thank you for your interest in Ardea. We'll be in touch soon with updates and
                early access information. Your founding rate is locked in.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Reclaim Your Time?
              </h2>
              <p className="text-xl text-sage-100 mb-8">
                Join the waitlist for founding member pricing and be the first to experience
                a unified platform built specifically for wellness professionals.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-xl text-sage-100 placeholder-sage-100 border-2 border-sage-300 focus:outline-none focus:border-sage-100 focus:ring-2 focus:ring-sage-100"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-terracotta-500 hover:bg-terracotta-600 disabled:bg-terracotta-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors whitespace-nowrap"
                >
                  {isSubmitting ? "Joining..." : "Email me"}
                </button>
              </form>
              <p className="mt-4 text-sm text-sage-200">
                No spam. Just updates on our launch and your founding member pricing.
              </p>
            </>
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
