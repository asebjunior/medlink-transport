export function VanIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 420"
      className={className}
      role="img"
      aria-label="Illustration of a wheelchair-accessible MedLink Transport van with a ramp deployed, and a staff member assisting a passenger who uses a wheelchair."
    >
      <ellipse cx="330" cy="348" rx="230" ry="12" fill="#E1E6EC" />

      <g aria-hidden="true">
        {/* Ramp */}
        <path d="M180 240 L70 340 L180 340 Z" fill="#C7CFD9" />
        <path d="M112 306 L154 264 M126 320 L168 278" stroke="#AFB9C6" strokeWidth="4" strokeLinecap="round" />

        {/* Van body */}
        <rect x="180" y="120" width="330" height="180" rx="22" fill="#1565C0" />
        <rect x="180" y="120" width="330" height="42" rx="22" fill="#0D47A1" />
        <path d="M470 120 h20 a20 20 0 0 1 20 20 v50 h-40 Z" fill="#1565C0" />

        {/* Windows */}
        <rect x="484" y="140" width="34" height="46" rx="8" fill="#EAF2FC" />
        <rect x="212" y="178" width="80" height="54" rx="8" fill="#EAF2FC" />
        <rect x="308" y="178" width="80" height="54" rx="8" fill="#EAF2FC" />
        <rect x="404" y="178" width="66" height="54" rx="8" fill="#EAF2FC" />

        {/* Accessibility badge on side panel */}
        <circle cx="440" cy="256" r="30" fill="#ffffff" />
        <g transform="translate(422,238)">
          <circle cx="18" cy="8" r="6" fill="#1565C0" />
          <path
            d="M18 17c-1.8 0-3.3 1.4-3.3 3.2v9.2c-4.9.7-8.7 4.9-8.7 10 0 5.6 4.5 10.1 10.1 10.1 4.7 0 8.7-3.3 9.8-7.7l7.8 1.6.9-4.4-9.9-2v-6.2h8.6v-4.5h-9.3l-1-3.2c-.5-1.6-2-2.7-3.7-2.7Z"
            fill="#1565C0"
          />
        </g>

        {/* Rear doorway opening (dark, so the ramp reads as entering the van) */}
        <rect x="182" y="164" width="26" height="112" fill="#0D47A1" />

        {/* Staff member assisting, standing at the doorway */}
        <circle cx="230" cy="234" r="14" fill="#2E7D32" />
        <rect x="217" y="250" width="26" height="46" rx="10" fill="#1B5E20" />

        {/* Passenger using a wheelchair on the ramp */}
        <circle cx="120" cy="284" r="13" fill="#2E7D32" />
        <rect x="108" y="299" width="24" height="26" rx="8" fill="#1B5E20" />
        <g stroke="#1A2332" strokeWidth="4" strokeLinecap="round" fill="none">
          <circle cx="118" cy="333" r="21" />
          <circle cx="90" cy="345" r="7" />
          <path d="M118 312 v18 M139 333 h-14" />
        </g>

        {/* Van wheels */}
        <circle cx="260" cy="300" r="32" fill="#1A2332" />
        <circle cx="260" cy="300" r="13" fill="#F5F7FA" />
        <circle cx="440" cy="300" r="32" fill="#1A2332" />
        <circle cx="440" cy="300" r="13" fill="#F5F7FA" />
      </g>
    </svg>
  );
}
