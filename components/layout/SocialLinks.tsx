"use client";
import { useState } from "react";
import { Camera, Mail, Link2, Check } from "lucide-react";
import { INSTAGRAM, CONTACT_EMAIL } from "@/lib/brand-content";
export function SocialLinks() {
  const [status, setStatus] = useState("");
  async function copy() {
    try { await navigator.clipboard.writeText(window.location.href); setStatus("Link copied. Ready to share."); }
    catch { setStatus("Copy this page’s address from your browser to share it."); }
  }
  return <div className="social-strip"><div><p className="eyebrow">FOLLOW THE GOOD TIMES</p><p>Save the inspiration. Bring your people.</p></div><div className="social-actions"><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Camera size={18} />Instagram</a><a href={`mailto:${CONTACT_EMAIL}`}><Mail size={18} />Email us</a><button type="button" onClick={copy}>{status.startsWith("Link copied") ? <Check size={18} /> : <Link2 size={18} />}Copy page link</button><span role="status">{status}</span></div></div>;
}

