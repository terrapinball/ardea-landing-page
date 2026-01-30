// Backup of mockup components - removed from landing page 2026-01-29

// Calendar Mockup Component - matches unified-calendar.png reference
export function CalendarMockup() {
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
  // Classes (sage), Massage appointments (terracotta), Retreat (slate-600), Google Calendar (sky)
  const events = [
    // Monday - classes + Google event
    { day: 0, slot: 0, title: 'Morning Flow', subtitle: 'Group Class', color: 'bg-sage-400' },
    { day: 0, slot: 3, title: 'Power Yoga', subtitle: 'Group Class', color: 'bg-sage-400' },
    { day: 0, slot: 6, title: 'Yin Yoga', subtitle: 'Group Class', color: 'bg-sage-400' },
    // Tuesday - classes + massage
    { day: 1, slot: 1, title: 'Vinyasa', subtitle: 'Group Class', color: 'bg-sage-400' },
    { day: 1, slot: 3, title: 'Sarah M.', subtitle: 'Massage 60min', color: 'bg-terracotta-400' },
    { day: 1, slot: 5, title: 'Gentle Flow', subtitle: 'Group Class', color: 'bg-sage-400' },
    // Wednesday - classes + Google event
    { day: 2, slot: 0, title: 'Morning Flow', subtitle: 'Group Class', color: 'bg-sage-400' },
    { day: 2, slot: 2, title: 'Hatha', subtitle: 'Group Class', color: 'bg-sage-400' },
    { day: 2, slot: 4, title: 'Dentist', subtitle: 'Google Calendar', color: 'bg-sky-400', synced: true },
    { day: 2, slot: 5, title: 'Restorative', subtitle: 'Group Class', color: 'bg-sage-400' },
    // Thursday - classes + massage + Google event
    { day: 3, slot: 0, title: 'Coffee w/ Lisa', subtitle: 'Google Calendar', color: 'bg-sky-400', synced: true },
    { day: 3, slot: 1, title: 'Vinyasa', subtitle: 'Group Class', color: 'bg-sage-400' },
    { day: 3, slot: 4, title: 'Mike R.', subtitle: 'Massage 90min', color: 'bg-terracotta-400' },
    { day: 3, slot: 7, title: 'Evening Flow', subtitle: 'Group Class', color: 'bg-sage-400' },
    // Friday - retreat begins
    { day: 4, slot: 0, title: 'Morning Flow', subtitle: 'Group Class', color: 'bg-sage-400' },
    { day: 4, slot: 3, title: 'Retreat Check-in', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    { day: 4, slot: 5, title: 'Opening Circle', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    { day: 4, slot: 7, title: 'Dinner', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    // Saturday - retreat
    { day: 5, slot: 0, title: 'Sunrise Yoga', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    { day: 5, slot: 2, title: 'Meditation', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    { day: 5, slot: 4, title: 'Workshop', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    { day: 5, slot: 6, title: 'Sound Bath', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    // Sunday - retreat ends
    { day: 6, slot: 0, title: 'Sunrise Yoga', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    { day: 6, slot: 2, title: 'Closing Circle', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
    { day: 6, slot: 4, title: 'Checkout', subtitle: 'Mountain Retreat', color: 'bg-slate-600' },
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
              <span className="ml-auto bg-sage-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">1</span>
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
                              <div className="flex items-start justify-between">
                                <p className="text-[10px] font-medium truncate">{event.title}</p>
                                {'synced' in event && event.synced && (
                                  <svg className="w-2.5 h-2.5 flex-shrink-0 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"/>
                                  </svg>
                                )}
                              </div>
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

// Class Card Mockup Component - matches class-card-sample.png reference
export function ClassCardMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden w-full sm:w-96">
      {/* Hero Image */}
      <div className="relative h-40">
        <img
          src="https://images.unsplash.com/photo-1631954401711-0b11d59ba205?w=400&q=80"
          alt="Person overlooking mountain valley"
          className="w-full h-full object-cover"
        />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow-md">
          <span className="text-sage-600 font-semibold text-sm">$22</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div>
          <h4 className="text-lg font-semibold text-slate-800">Vinyasa</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            All levels
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-slate-600">
          {/* Time */}
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Thursday, 9:00 AM</span>
            <span className="text-slate-400">•</span>
            <span>60 min</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="bg-sage-100 text-sage-700 px-2 py-0.5 rounded-md text-xs font-medium">The Conservatory</span>
          </div>

          {/* Spots */}
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>3/20 spots left</span>
          </div>
        </div>

        {/* Book Button */}
        <button className="w-full bg-sage-500 hover:bg-sage-600 text-white py-3 rounded-xl font-semibold transition-colors mt-2">
          Book Now
        </button>
      </div>
    </div>
  )
}

// Retreat Management Mockup Component
export function RetreatMockup() {
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
export function MessagingMockup() {
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
