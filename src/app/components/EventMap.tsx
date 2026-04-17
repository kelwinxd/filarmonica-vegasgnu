"use client"
import { useEffect, useRef } from "react";
import type { Map } from "leaflet";
import "leaflet/dist/leaflet.css";
import { EventComponent } from "../../../types/event";

export function EventMap({ event }: { event: EventComponent }) {
  const mapRef = useRef<Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null); // 👈 ref no container

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return; // 👈 checa novamente após o await

      mapRef.current = L.map(containerRef.current, { scrollWheelZoom: false }).setView(
        [event.lat, event.lng], 15
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapRef.current);

      const pinIcon = L.divIcon({
        className: "",
        html: `<svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 10 16 24 16 24s16-14 16-24C32 7.163 24.837 0 16 0z" fill="#E24B4A"/>
          <circle cx="16" cy="16" r="7" fill="white"/>
        </svg>`,
        iconSize: [32, 40],
        iconAnchor: [16, 40],
        popupAnchor: [0, -42],
      });

      L.marker([event.lat, event.lng], { icon: pinIcon })
        .addTo(mapRef.current)
        .bindPopup(
          `<b>${event.place}</b><br/>
          ${event.address.street}, ${event.address.number}<br/>
          ${event.address.city}, ${event.address.state}<br/>
          <a href="${event.mapUrl}" target="_blank">Ver no Google Maps →</a>`
        )
        .openPopup();
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [event]);

  // 👇 ref no div, sem id fixo
  return <div ref={containerRef} style={{ width: "100%", height: "340px", borderRadius: "8px" }} />;
}