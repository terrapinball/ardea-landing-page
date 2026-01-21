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

// Mobile App Welcome Screen Mockup - matches welcome-screen-neutral.png reference
function MobileWelcomeMockup() {
  return (
    <div
      className="relative mx-auto w-[300px] h-[620px] rounded-[2.2rem] p-[5px]"
      style={{
        background: 'linear-gradient(165deg, #334155 0%, #1e293b 40%, #0f172a 100%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
      }}
    >
      {/* Subtle highlight edge for depth */}
      <div className="absolute inset-0 rounded-[2.2rem] pointer-events-none" style={{ background: 'linear-gradient(165deg, rgba(255,255,255,0.06) 0%, transparent 25%, transparent 100%)' }}></div>

      {/* Dynamic Island */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3) inset' }}></div>

      {/* Screen */}
      <div className="relative w-full h-full bg-white rounded-[1.9rem] overflow-hidden flex flex-col" style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.3)' }}>
        {/* Status bar - space for dynamic island */}
        <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-slate-400">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-5 py-2 overflow-hidden">
          {/* Header */}
          <div className="mb-5 mt-10">
            <h2 className="text-xl font-semibold text-slate-500">Welcome! Let's get started</h2>
          </div>

          {/* Today card */}
          <div className="bg-stone-100 rounded-2xl p-4 mb-5">
            <p className="text-xs text-stone-500 mb-1">Today</p>
            <p className="text-base font-semibold text-slate-800 mb-3">You have 2 sessions scheduled</p>
            <button className="bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
              View Calendar
            </button>
          </div>

          {/* Next Up section */}
          <div>
            <p className="text-xs text-stone-400 mb-3">Next Up</p>

            {/* Session card 1 */}
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100 mb-3">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-stone-200 rounded-xl flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">Morning Stretch</p>
                  <p className="text-xs text-stone-400 mb-2">Gentle movement to start your day</p>
                  <div className="flex items-center gap-3 text-[10px] text-stone-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      8:30 AM
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Virtual
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session card 2 */}
            <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-stone-300 rounded-xl flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">Wellness Check-in</p>
                  <p className="text-xs text-stone-400 mb-2">Monthly progress review</p>
                  <div className="flex items-center gap-3 text-[10px] text-stone-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2:00 PM
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Room 3B
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1">
          <div className="w-28 h-1 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

// Calendar Mockup Component - matches unified-calendar.png reference
function CalendarMockup() {
  const weekDays = [
    { day: 'Mon', date: 13 },
    { day: 'Tue', date: 14 },
    { day: 'Wed', date: 15 },
    { day: 'Thu', date: 16 },
    { day: 'Fri', date: 17 },
    { day: 'Sat', date: 18 },
    { day: 'Sun', date: 19 },
  ]
  const timeSlots = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM']

  // Events positioned by day (0-6) and time slot (0-7)
  const events = [
    { day: 1, slot: 2, title: 'Sarah M.', subtitle: 'Yoga Session', color: 'bg-sage-400' },
    { day: 4, slot: 1, title: 'Emma K.', subtitle: 'Follow-up', color: 'bg-terracotta-400' },
    { day: 4, slot: 4, title: 'Mike R.', subtitle: 'Consultation', color: 'bg-terracotta-400' },
  ]

  const messages = [
    { initials: 'SM', name: 'Sarah Martinez', time: '2m', message: 'Thanks for the session tod...', color: 'bg-sage-400', unread: true },
    { initials: 'MR', name: 'Mike Richardson', time: '1h', message: 'Can we reschedule tomorrow?', color: 'bg-slate-400', unread: false },
    { initials: 'EK', name: 'Emma Kim', time: '3h', message: 'Looking forward to next week', color: 'bg-slate-300', unread: false },
    { initials: 'JD', name: 'John Davis', time: '5h', message: 'Payment confirmed', color: 'bg-slate-300', unread: false },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-x-auto scrollbar-hide max-w-4xl mx-auto">
      <div className="flex min-w-[800px]">
        {/* Sidebar */}
        <div className="w-44 bg-paper border-r border-slate-200 p-4">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-7 h-7 bg-terracotta-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">A</div>
            <span className="font-semibold text-slate-800">Ardea</span>
          </div>

          {/* Nav items */}
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-slate-100 text-slate-800 rounded-lg text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Calendar
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Clients
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Messages
              <span className="ml-auto bg-sage-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Payments
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
          </nav>

          {/* User profile at bottom */}
          <div className="mt-auto pt-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 text-xs font-medium">JD</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-slate-700 truncate">Jane Doe</p>
                <p className="text-[10px] text-slate-400 truncate">jane@studio.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main calendar area */}
        <div className="flex-1 flex flex-col">
          {/* Calendar header */}
          <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold text-slate-800">Calendar</h2>
              <div className="flex items-center gap-2">
                <button className="text-slate-400 hover:text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm font-medium text-slate-700">January 2026</span>
                <button className="text-slate-400 hover:text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <button className="bg-sage-500 hover:bg-sage-600 text-white text-sm px-4 py-2 rounded-lg font-medium transition-colors">
              New Booking
            </button>
          </div>

          {/* Week view calendar */}
          <div className="flex-1 overflow-auto">
            <div className="min-w-[500px]">
              {/* Day headers */}
              <div className="grid grid-cols-8 border-b border-slate-200 bg-slate-50">
                <div className="p-2"></div>
                {weekDays.map((d, i) => (
                  <div key={i} className="p-2 text-center border-l border-slate-200">
                    <p className="text-xs text-slate-500">{d.day}</p>
                    <p className="text-sm font-semibold text-slate-700">{d.date}</p>
                  </div>
                ))}
              </div>

              {/* Time grid */}
              <div className="relative">
                {timeSlots.map((time, slotIndex) => (
                  <div key={slotIndex} className="grid grid-cols-8 border-b border-slate-100" style={{ height: '48px' }}>
                    <div className="p-1 text-[10px] text-slate-400 text-right pr-2 pt-0">{time}</div>
                    {weekDays.map((_, dayIndex) => (
                      <div key={dayIndex} className="border-l border-slate-100 relative">
                        {events
                          .filter(e => e.day === dayIndex && e.slot === slotIndex)
                          .map((event, i) => (
                            <div
                              key={i}
                              className={`absolute inset-x-1 top-1 ${event.color} rounded-md p-1.5 text-white shadow-sm`}
                              style={{ height: '42px' }}
                            >
                              <p className="text-[10px] font-medium truncate">{event.title}</p>
                              <p className="text-[9px] opacity-80 truncate">{event.subtitle}</p>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Messages panel */}
        <div className="w-56 border-l border-slate-200 bg-white flex flex-col">
          {/* Messages header */}
          <div className="p-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Messages</span>
            </div>
            <span className="text-[9px] bg-sage-100 text-sage-700 px-1.5 py-0.5 rounded font-medium">E2EE</span>
          </div>

          {/* Search */}
          <div className="p-2">
            <div className="bg-slate-50 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-[10px] text-slate-400">Search messages...</span>
            </div>
          </div>

          {/* Message list */}
          <div className="flex-1 overflow-auto">
            {messages.map((msg, i) => (
              <div key={i} className="px-3 py-2 hover:bg-slate-50 cursor-pointer border-b border-slate-50">
                <div className="flex items-start gap-2">
                  <div className={`w-8 h-8 ${msg.color} rounded-full flex items-center justify-center text-white text-[10px] font-medium flex-shrink-0`}>
                    {msg.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-slate-700 truncate">{msg.name}</p>
                      <span className="text-[9px] text-slate-400 flex-shrink-0">{msg.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-2.5 h-2.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                      <p className="text-[10px] text-slate-500 truncate">{msg.message}</p>
                    </div>
                  </div>
                  {msg.unread && <div className="w-1.5 h-1.5 bg-terracotta-500 rounded-full flex-shrink-0 mt-1"></div>}
                </div>
              </div>
            ))}
          </div>

          {/* E2EE notice */}
          <div className="p-2 border-t border-slate-100">
            <p className="text-[8px] text-slate-400 text-center leading-tight">
              All messages are end-to-end encrypted. Only you and your clients can read them.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Retreat Management Mockup Component
function RetreatMockup() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden max-w-md mx-auto">
      {/* Header */}
      <div className="relative h-24 bg-gradient-to-r from-sage-500 to-sage-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-3 left-4 text-white">
          <h4 className="font-semibold text-sm">Mountain Wellness Retreat</h4>
          <p className="text-xs text-sage-100">Mar 15-18, 2025 • 12 spots</p>
        </div>
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
          8 registered
        </div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Registration</span>
            <span>8/12 spots filled</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-sage-500 rounded-full" style={{ width: '66%' }}></div>
          </div>
        </div>
        {/* Attendee List Preview */}
        <div>
          <div className="text-xs font-medium text-slate-700 mb-2">Recent Registrations</div>
          <div className="space-y-2">
            {[
              { name: 'Sarah M.', room: 'Single', diet: 'Vegetarian', deposit: true },
              { name: 'James L.', room: 'Shared', diet: 'Vegan', deposit: true },
              { name: 'Maya R.', room: 'Single', diet: 'None', deposit: false },
            ].map((attendee, i) => (
              <div key={i} className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 text-xs font-medium">
                    {attendee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-700">{attendee.name}</p>
                    <p className="text-[10px] text-slate-500">{attendee.room} • {attendee.diet}</p>
                  </div>
                </div>
                <div className={`text-[10px] px-2 py-0.5 rounded-full ${attendee.deposit ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {attendee.deposit ? 'Paid' : 'Pending'}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-50 rounded-lg p-2 text-center">
            <p className="text-lg font-semibold text-slate-800">$2,400</p>
            <p className="text-[10px] text-slate-500">Deposits</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 text-center">
            <p className="text-lg font-semibold text-slate-800">6</p>
            <p className="text-[10px] text-slate-500">Forms Done</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-2 text-center">
            <p className="text-lg font-semibold text-slate-800">2</p>
            <p className="text-[10px] text-slate-500">Waitlisted</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Secure Messaging Mockup Component
function MessagingMockup() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden max-w-md mx-auto">
      {/* Header */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 text-sm font-medium">
            AL
          </div>
          <div>
            <p className="text-sm font-medium text-slate-800">Anna Lewis</p>
            <p className="text-xs text-slate-500">Private Session Client</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sage-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-xs font-medium">Encrypted</span>
        </div>
      </div>
      {/* Messages */}
      <div className="p-4 space-y-3 bg-slate-50 min-h-[200px]">
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow-sm">
            <p className="text-sm text-slate-700">Hi! I wanted to let you know my lower back has been bothering me this week.</p>
            <p className="text-[10px] text-slate-400 mt-1">10:30 AM</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-sage-500 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
            <p className="text-sm text-white">Thanks for letting me know! We'll focus on gentle stretches and avoid any deep twists tomorrow.</p>
            <p className="text-[10px] text-sage-200 mt-1">10:32 AM</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] shadow-sm">
            <p className="text-sm text-slate-700">Perfect, thank you! See you at 2pm.</p>
            <p className="text-[10px] text-slate-400 mt-1">10:33 AM</p>
          </div>
        </div>
        {/* Ephemeral notice */}
        <div className="flex justify-center">
          <div className="flex items-center gap-1 bg-slate-200/50 text-slate-500 text-[10px] px-2 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Messages auto-delete after 30 days
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="p-3 bg-white border-t border-slate-200">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-400">
            Type a message...
          </div>
          <button className="w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// Card brand icons
function VisaIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 750 471" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="471" rx="40" fill="#1A1F71"/>
      <path d="M278.197 334.228L311.055 138.387H364.516L331.658 334.228H278.197ZM524.307 142.687C513.586 138.895 496.48 134.797 475.355 134.797C422.413 134.797 385.073 162.019 384.773 201.259C384.17 230.79 411.495 247.077 432.02 256.824C453.046 266.772 460.069 273.244 460.069 282.088C459.866 295.734 443.262 301.903 427.766 301.903C406.34 301.903 394.91 298.615 377.251 290.975L369.927 287.584L362.603 333.424C375.235 339.19 398.573 344.296 422.413 344.598C478.57 344.598 515.175 317.677 515.779 276.031C515.979 252.531 501.481 234.838 470.032 220.39C451.029 210.947 439.197 204.576 439.197 195.029C439.398 186.386 448.913 177.541 470.032 177.541C487.44 177.037 500.475 180.831 510.693 184.624L515.779 186.789L523.001 142.687H524.307ZM661.615 138.387H621.089C608.457 138.387 598.938 141.882 593.351 154.624L514.67 334.228H570.827L582.155 304.193H650.285L656.805 334.228H706.333L661.615 138.387ZM598.234 264.566C601.851 255.217 617.448 214.173 617.448 214.173C617.146 214.778 620.965 204.072 623.175 197.499L626.289 212.665C626.289 212.665 635.704 257.081 637.916 264.566H598.234ZM232.673 138.387L180.235 267.655L174.749 240.831C165.535 213.001 139.615 182.863 110.379 167.915L158.306 334.027H214.765L289.13 138.387H232.673Z" fill="white"/>
      <path d="M131.505 138.387H45.881L45.076 142.385C112.898 159.377 157.801 199.822 174.747 240.833L157.498 155.129C154.383 142.285 145.068 138.791 131.505 138.387Z" fill="#F9A51A"/>
    </svg>
  )
}

function MastercardIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 750 471" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="471" rx="40" fill="#000"/>
      <circle cx="299" cy="235.5" r="147" fill="#EB001B"/>
      <circle cx="451" cy="235.5" r="147" fill="#F79E1B"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M375 341.962C408.165 313.883 429 271.476 429 224.5C429 177.524 408.165 135.117 375 107.038C341.835 135.117 321 177.524 321 224.5C321 271.476 341.835 313.883 375 341.962Z" fill="#FF5F00"/>
    </svg>
  )
}

function DiscoverIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 750 471" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="471" rx="40" fill="#FFF"/>
      <rect x="1" y="1" width="748" height="469" rx="39" stroke="#DDD" strokeWidth="2"/>
      <path d="M0 235.5h450v235.5H40c-22.091 0-40-17.909-40-40V235.5z" fill="#F48120"/>
      <circle cx="534" cy="235.5" r="75" fill="#F48120"/>
      <path d="M140 200h50c30 0 50 20 50 50s-20 50-50 50h-50v-100z" fill="#000"/>
      <path d="M180 220c15 0 25 10 25 30s-10 30-25 30" stroke="#fff" strokeWidth="8" fill="none"/>
      <text x="250" y="265" fontFamily="Arial" fontSize="70" fontWeight="bold" fill="#000">DISCOVER</text>
    </svg>
  )
}

function AmexIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 750 471" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="471" rx="40" fill="#006FCF"/>
      <path d="M0 235.5h750v195.5c0 22.091-17.909 40-40 40H40c-22.091 0-40-17.909-40-40V235.5z" fill="#006FCF"/>
      <text x="375" y="260" fontFamily="Arial" fontSize="100" fontWeight="bold" fill="#FFF" textAnchor="middle">AMEX</text>
    </svg>
  )
}

function PinDebitIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 750 471" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="471" rx="40" fill="#2D5F2E"/>
      <text x="375" y="260" fontFamily="Arial" fontSize="70" fontWeight="bold" fill="#FFF" textAnchor="middle">PIN DEBIT</text>
    </svg>
  )
}

// Pricing Calculator Component
function PricingCalculator() {
  type TransactionType = 'in-person' | 'keyed-online' | 'ach' | 'pass-on';
  type CardBrand = 'combined' | 'visa' | 'mastercard' | 'discover' | 'amex' | 'pin-debit';

  const [transactionType, setTransactionType] = useState<TransactionType>('keyed-online');
  const [cardBrand, setCardBrand] = useState<CardBrand>('combined');
  const [volumeIndex, setVolumeIndex] = useState(4); // Default to 20k (index 4)

  // Volume steps (non-linear increments)
  const volumeSteps = [
    0, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 55000, 70000,
    90000, 100000, 150000, 200000, 250000, 350000, 450000, 600000, 750000, 1000000
  ];

  const formatVolume = (value: number): string => {
    if (value >= 1000000) return '$1M+';
    if (value >= 1000) return `$${(value / 1000)}k`;
    return `$${value}`;
  };

  const currentVolume = volumeSteps[volumeIndex];

  // Discount tiers based on monthly volume
  const getDiscountTier = (volume: number): number => {
    if (volume < 50000) return 1;
    if (volume < 100000) return 2;
    if (volume < 500000) return 3;
    if (volume < 1000000) return 4;
    return 5;
  };

  // In-person rates by tier
  const inPersonRates: Record<number, { percentage: number; cents: number }> = {
    1: { percentage: 0.40, cents: 8 },
    2: { percentage: 0.35, cents: 7 },
    3: { percentage: 0.25, cents: 7 },
    4: { percentage: 0.20, cents: 6 },
    5: { percentage: 0.15, cents: 6 },
  };

  // Keyed & Online rates by tier
  const keyedOnlineRates: Record<number, { percentage: number; cents: number }> = {
    1: { percentage: 0.50, cents: 25 },
    2: { percentage: 0.45, cents: 20 },
    3: { percentage: 0.35, cents: 20 },
    4: { percentage: 0.25, cents: 15 },
    5: { percentage: 0.15, cents: 15 },
  };

  // Interchange rates by card brand (average rates)
  // These are configured so that at $20k volume (Tier 1: +0.40%):
  // Visa/MC/Discover show 1.88%, AmEx shows 2.67%, PIN-Debit shows 1.08%
  const interchangeRates: Record<CardBrand, number> = {
    'combined': 1.48,
    'visa': 1.48,
    'mastercard': 1.48,
    'discover': 1.48,
    'amex': 2.27,
    'pin-debit': 0.68,
  };

  const tier = getDiscountTier(currentVolume);

  // Calculate the display rate
  const calculateRate = (): { percentage: string; cents: number; description: string } | null => {
    if (transactionType === 'ach') {
      return null; // ACH has special display
    }
    if (transactionType === 'pass-on') {
      return null; // Pass-on has special display
    }

    const rates = transactionType === 'in-person' ? inPersonRates : keyedOnlineRates;
    const tierRate = rates[tier];
    const interchange = interchangeRates[cardBrand];
    const totalPercentage = interchange + tierRate.percentage;

    return {
      percentage: totalPercentage.toFixed(2),
      cents: tierRate.cents,
      description: `Interchange (${interchange.toFixed(2)}%) + ${tierRate.percentage.toFixed(2)}%`
    };
  };

  const rate = calculateRate();

  const transactionTypes: { id: TransactionType; label: string }[] = [
    { id: 'in-person', label: 'In-person' },
    { id: 'keyed-online', label: 'Keyed & Online' },
    { id: 'ach', label: 'ACH' },
    { id: 'pass-on', label: 'Pass-on fees' },
  ];

  const cardBrands: { id: CardBrand; label: string; icon?: React.ReactNode }[] = [
    { id: 'combined', label: 'Combined Average' },
    { id: 'visa', label: 'Visa', icon: <VisaIcon className="w-8 h-5" /> },
    { id: 'mastercard', label: 'Mastercard', icon: <MastercardIcon className="w-8 h-5" /> },
    { id: 'discover', label: 'Discover', icon: <DiscoverIcon className="w-8 h-5" /> },
    { id: 'amex', label: 'American Express', icon: <AmexIcon className="w-8 h-5" /> },
    { id: 'pin-debit', label: 'PIN-Debit', icon: <PinDebitIcon className="w-8 h-5" /> },
  ];

  // Render card rates for in-person/keyed-online
  const renderCardRates = () => {
    const rates = transactionType === 'in-person' ? inPersonRates : keyedOnlineRates;
    const tierRate = rates[tier];

    if (cardBrand === 'combined') {
      // Visa, Mastercard, Discover all have the same interchange rate
      const vmcDiscoverRate = interchangeRates['visa'];

      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <VisaIcon className="w-8 h-5" />
              <MastercardIcon className="w-8 h-5" />
              <DiscoverIcon className="w-8 h-5" />
            </div>
            <span className="font-bold text-slate-800 text-lg">
              {(vmcDiscoverRate + tierRate.percentage).toFixed(2)}% + {tierRate.cents}¢
            </span>
          </div>
          <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <AmexIcon className="w-8 h-5" />
              <span className="text-sm text-slate-600">AmEx</span>
            </div>
            <span className="font-bold text-slate-800 text-lg">
              {(interchangeRates['amex'] + tierRate.percentage).toFixed(2)}% + {tierRate.cents}¢
            </span>
          </div>
          <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <PinDebitIcon className="w-8 h-5" />
              <span className="text-sm text-slate-600">PIN-Debit</span>
            </div>
            <span className="font-bold text-slate-800 text-lg">
              {(interchangeRates['pin-debit'] + tierRate.percentage).toFixed(2)}% + {tierRate.cents}¢
            </span>
          </div>
        </div>
      );
    } else {
      // Show single card brand
      const brandInfo = cardBrands.find(b => b.id === cardBrand);
      return (
        <div className="flex items-center justify-between bg-slate-50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            {brandInfo?.icon}
            <span className="text-slate-600">{brandInfo?.label}</span>
          </div>
          <span className="font-bold text-slate-800 text-xl">
            {rate?.percentage}% + {rate?.cents}¢
          </span>
        </div>
      );
    }
  };

  return (
    <div className="soft-card bg-white rounded-2xl p-6 md:p-8 border border-sand-200 max-w-xl mx-auto">

      {/* Transaction Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {transactionTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setTransactionType(type.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              transactionType === type.id
                ? 'bg-sage-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* In-person and Keyed/Online content */}
      {(transactionType === 'in-person' || transactionType === 'keyed-online') && (
        <>
          {/* Card Brand Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Average {transactionType === 'in-person' ? 'In-person' : 'Keyed & Online'} Cost
            </label>
            <select
              value={cardBrand}
              onChange={(e) => setCardBrand(e.target.value as CardBrand)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            >
              {cardBrands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.label}
                </option>
              ))}
            </select>
          </div>

          {/* Volume Slider */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Monthly Sales Volume: <span className="font-bold text-sage-600">{formatVolume(currentVolume)}</span>
            </label>
            <input
              type="range"
              min="0"
              max={volumeSteps.length - 1}
              value={volumeIndex}
              onChange={(e) => setVolumeIndex(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sage-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>$0</span>
              <span>$1M+</span>
            </div>
          </div>

          {/* Discount Tier Badge */}
          <div className="mb-6 flex items-center justify-center">
            <span className="bg-sage-100 text-sage-700 text-sm font-medium px-3 py-1 rounded-full">
              Discount Tier {tier}
            </span>
          </div>

          {/* Rate Display */}
          {renderCardRates()}

          {/* Rate breakdown note */}
          <p className="text-xs text-slate-500 mt-4 text-center">
            Rates shown include interchange + Helcim markup
          </p>
        </>
      )}

      {/* ACH Content */}
      {transactionType === 'ach' && (
        <div className="text-center space-y-4">
          <p className="text-slate-600 mb-4">
            Accept ACH and EFT/PAD direct withdrawals from your customers' bank accounts.
          </p>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm text-slate-500 mb-2">ACH Acceptance</p>
            <p className="text-3xl font-bold text-slate-800 mb-4">0.5% + 25¢</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <p className="font-semibold text-slate-800">Capped at $6</p>
                <p className="text-slate-500">for transactions below $25,000</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <p className="font-semibold text-slate-800">+0.05%</p>
                <p className="text-slate-500">for transactions above $25,000</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pass-on Fees Content */}
      {transactionType === 'pass-on' && (
        <div className="space-y-6">
          <p className="text-slate-600 text-center mb-4">
            Get free credit card processing. Pass the fees to your customers.
          </p>

          {/* In-person surcharging */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-semibold text-slate-800 mb-3">In-person Surcharging</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Credit cards</span>
                <span className="font-bold text-sage-600 text-lg">You pay 0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Debit cards</span>
                <span className="text-slate-500 text-sm">Standard in-person rates</span>
              </div>
            </div>
          </div>

          {/* Online convenience fees */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-semibold text-slate-800 mb-3">Online Convenience Fees</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Credit cards</span>
                <span className="font-bold text-sage-600 text-lg">You pay 0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">ACH payments</span>
                <span className="text-slate-500 text-sm">ACH rates when selected</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Powered by Helcim badge */}
      <div className="mt-6 pt-4 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">
          Powered by <span className="font-medium">Helcim</span> payment processing
        </p>
      </div>
    </div>
  );
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

    try {
      const { supabase } = await import('./lib/supabase')
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, tier: tier || selectedTier }])

      if (error) throw error

      setIsSubmitted(true)
    } catch (err) {
      console.error('Waitlist signup error:', err)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
      <section ref={heroSection.ref} className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
            alt="Mystic forest with fog"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability - darker at top/center where text sits */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 mt-30 lg:mt-0">
                Less Admin. More Presence.
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8">
                From group classes to private retreats—Ardea unites your community with simplicity and security.
              </p>
              <div className="mb-8">
                <a
                  href="#waitlist"
                  className="inline-block bg-sage-500 hover:bg-sage-600 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-sage-500/25"
                >
                  Join the Waitlist
                </a>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sage-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sage-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>One unified calendar</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sage-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>You own your data</span>
                </div>
              </div>
            </div>

            {/* Mobile mockup - desktop */}
            <div className="flex-shrink-0 hidden lg:block">
              <MobileWelcomeMockup />
            </div>
          </div>

          {/* Mobile mockup - mobile only */}
          <div className="lg:hidden pt-8 pb-12 flex justify-center">
            <MobileWelcomeMockup />
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sage-500 font-medium mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything in One Place. Finally.
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built for the way wellness <span className="font-semibold text-slate-800">actually works</span>
            </p>
          </div>

          {/* Feature 1: Master Calendar */}
          <div className={`mb-20 ${featuresSection.isInView ? 'animate-fade-in-up animate-delay-1' : 'opacity-0'}`}>
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-7 h-7 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                The Master Calendar
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 max-w-2xl mx-auto">
                Keep using the tools you love. Ardea features a <span className="font-semibold text-slate-800">seamless, two-way sync</span> with Google, Apple,
                and Outlook calendars. Pull in your personal appointments and push your Ardea sessions out,
                so your <span className="font-semibold text-slate-800">entire life stays in sync—no manual updates required</span>.
              </p>
              <p className="text-sage-500 font-medium">
                Universal Calendar View
              </p>
            </div>
            <div className="mt-8">
              <CalendarMockup />
            </div>
          </div>

          {/* Feature 2: Retreat & Event Management */}
          <div className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${featuresSection.isInView ? 'animate-fade-in-up animate-delay-2' : 'opacity-0'}`}>
            <div className="flex-1">
              <RetreatMockup />
            </div>
            <div className="flex-1">
              <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Retreat & Event Management
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Launch workshops and retreats <span className="font-semibold text-slate-800">without the spreadsheet chaos</span>. Custom booking flows,
                deposit handling, room selections, dietary intake forms, and attendee management—all
                built in. <span className="font-semibold text-slate-800">Focus on the experience, not the logistics.</span>
              </p>
              <p className="text-sage-500 font-medium">
                Retreats Made Simple
              </p>
            </div>
          </div>

          {/* Feature 3: Secure Messaging */}
          <div className={`flex flex-col lg:flex-row items-center gap-12 ${featuresSection.isInView ? 'animate-fade-in-up animate-delay-3' : 'opacity-0'}`}>
            <div className="flex-1 order-2 lg:order-1">
              <div className="w-14 h-14 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                E2EE Secure Messaging
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                End-to-end encrypted with the <span className="font-semibold text-slate-800">Signal Protocol</span>. Your clients' sensitive health disclosures
                live only as long as they need to—leaving <span className="font-semibold text-slate-800">no digital trail</span> for hackers, third parties,
                or advertisers to exploit. We don't just "not sell" data—we built a system where there's <span className="font-semibold text-slate-800">nothing to sell</span>.
              </p>
              <p className="text-sage-500 font-medium">
                Privacy-First Communication
              </p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <MessagingMockup />
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

      {/* Founder's Note */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center md:text-left">Why am I making this?</h3>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Content */}
              <div className="flex-1 space-y-4 text-slate-600 leading-relaxed order-2 md:order-1">
                <p>
                  <span className="font-semibold text-slate-800">Wellness leaders shouldn't be stuck in the software weeds.</span> My close friend—a teacher and community leader—has to navigate multiple apps to manage what should be a simple process. <span className="font-semibold text-slate-800">It's ironic:</span> the people teaching us how to breathe and find balance are the ones getting bogged down with administration.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">Ardea</span> bridges that gap. We bring your classes, appointments, and events into <span className="font-semibold text-slate-800">one unified, simple space</span>. We handle the logistics so you can <span className="font-semibold text-slate-800">focus on your community</span>.
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

          {/* Payment Processing Calculator */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Transparent Payment Processing with <span className="font-helcim font-bold">Helcim</span>
              </h3>
              <p className="text-slate-600 max-w-xl mx-auto">
                See exactly what you'll pay for transaction processing
              </p>
            </div>
            <PricingCalculator />
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
