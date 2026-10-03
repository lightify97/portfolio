"use client";

import type { Certificate } from "@/data/profile";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CertificateList({ certificates }: { certificates: Certificate[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open) dialog.showModal();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);

  return (
    <>
      <ul>
        {certificates.map((cert) => (
          <li key={cert.title} className="flex items-center justify-between gap-4 border-b border-line py-4 first:pt-0">
            <div className="min-w-0">
              <p className="leading-snug">{cert.title}</p>
              <p className="mt-1 text-sm text-subtle">
                {cert.issuer} · {cert.platform} · {cert.issued}
              </p>
            </div>
            {cert.image && (
              <button
                type="button"
                onClick={() => setSelected(cert)}
                className="link shrink-0 text-sm text-muted"
                aria-label={`View certificate: ${cert.title}`}
              >
                View
              </button>
            )}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          // Close when the backdrop (the dialog element itself) is clicked.
          if (e.target === e.currentTarget) setSelected(null);
        }}
        className="w-[min(960px,calc(100vw-2rem))] rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        {selected?.image && (
          <div>
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
              <div className="min-w-0">
                <p className="truncate font-serif text-xl">{selected.title}</p>
                <p className="text-sm text-muted">
                  {selected.issuer} · {selected.issued}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="icon-btn shrink-0"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="bg-white">
              <Image
                src={selected.image}
                alt={`${selected.title} certificate`}
                width={3168}
                height={2448}
                sizes="(max-width: 1000px) 100vw, 960px"
                className="mx-auto h-auto max-h-[calc(100dvh-10rem)] w-auto"
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
