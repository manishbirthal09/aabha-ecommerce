import { useState } from "react";

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-sm font-semibold tracking-wide text-charcoal uppercase">
          {title}
        </span>
        <span className="text-xl text-charcoal leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="mt-4 text-sm text-gray-600 leading-relaxed space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}