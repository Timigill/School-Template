'use client';

function MapComponent() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#023D1F] border border-[#FFC107]/20">
      <div className="absolute inset-0 flex items-center justify-center text-center p-4">
        <div className="text-[#FFC107]">
          <span className="text-5xl block mb-3">📍</span>
          <h3 className="text-xl font-bold mb-2">Oxford House System</h3>
          <p className="text-white/90">Gulshan-e-Hayyat Faisalabad,</p>
          <p className="text-white/90">Pakistan-38000</p>
          <a
            href="https://maps.google.com/?q=Gulshan-e-Hayyat+Faisalabad+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-[#FFC107] text-[#034D27] rounded-lg font-semibold hover:bg-[#FFC107]/90 transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
