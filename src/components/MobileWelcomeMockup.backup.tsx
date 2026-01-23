import { useState } from 'react'

// Mobile App Welcome Screen Mockup - matches welcome-screen-neutral.png reference
// BACKUP: This component was removed from the hero section but preserved for future use
export function MobileWelcomeMockup({ onContinue }: { onContinue?: () => void }) {
  const [selectedType, setSelectedType] = useState<'business' | 'individual'>('business')

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

      {/* Screen - warm peachy background like reference */}
      <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden flex flex-col" style={{ background: '#FDF8F5', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.3)' }}>
        {/* Status bar - space for dynamic island */}
        <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs" style={{ color: '#9B8B7D' }}>
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
          {/* Calendar Icon - coral/salmon like reference */}
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mt-6" style={{ background: '#F8B4A0' }}>
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Header */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold" style={{ color: '#3D3530' }}>Welcome! Let's get started</h2>
          </div>
          <p className="text-sm mb-6" style={{ color: '#9B8B7D' }}>
            We'll have you ready to accept bookings in just a few minutes.
          </p>

          {/* Business Option */}
          <button
            onClick={() => setSelectedType('business')}
            className="w-full rounded-2xl p-4 mb-3 relative text-left transition-all"
            style={{
              background: 'white',
              border: selectedType === 'business' ? '2px solid #F28B6A' : '1px solid #E8E0DB'
            }}
          >
            {/* Checkmark badge - always present, visibility controlled */}
            <div
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-opacity"
              style={{
                background: '#F28B6A',
                opacity: selectedType === 'business' ? 1 : 0
              }}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex items-start gap-3 pr-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: selectedType === 'business' ? '#FCEEE8' : '#FAF6F3' }}
              >
                <svg className="w-5 h-5" fill="none" stroke={selectedType === 'business' ? '#F28B6A' : '#C4B5AB'} strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: '#3D3530' }}>Business</p>
                <p className="text-xs" style={{ color: '#9B8B7D' }}>Manage appointments, classes, and events</p>
              </div>
            </div>
          </button>

          {/* Individual Option */}
          <button
            onClick={() => setSelectedType('individual')}
            className="w-full rounded-2xl p-4 mb-6 relative text-left transition-all"
            style={{
              background: 'white',
              border: selectedType === 'individual' ? '2px solid #F28B6A' : '1px solid #E8E0DB'
            }}
          >
            {/* Checkmark badge - always present, visibility controlled */}
            <div
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-opacity"
              style={{
                background: '#F28B6A',
                opacity: selectedType === 'individual' ? 1 : 0
              }}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex items-start gap-3 pr-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: selectedType === 'individual' ? '#FCEEE8' : '#FAF6F3' }}
              >
                <svg className="w-5 h-5" fill="none" stroke={selectedType === 'individual' ? '#F28B6A' : '#C4B5AB'} strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: '#3D3530' }}>Individual</p>
                <p className="text-xs" style={{ color: '#9B8B7D' }}>Sign up for classes, join your favorite communities</p>
              </div>
            </div>
          </button>

          {/* Spacer to push button down */}
          <div className="flex-1"></div>
        </div>

        {/* Continue Button - Coral/salmon gradient */}
        <div className="px-5 pb-6">
          <button
            onClick={onContinue}
            className="w-full py-4 rounded-2xl text-white font-semibold text-base transition-transform active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #F8A090 0%, #F28B6A 100%)' }}
          >
            Continue
          </button>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1">
          <div className="w-28 h-1 rounded-full" style={{ background: '#D4C9C1' }}></div>
        </div>
      </div>
    </div>
  )
}
