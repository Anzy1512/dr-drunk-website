export type IllustrationKind = "cocktail" | "citrus" | "shaker" | "story";

/** Original vector artwork derived from the deck's glassware and doctor-bar motif. */
export function BrandIllustration({ kind, className = "" }: { kind: IllustrationKind; className?: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`brand-illustration ${className}`} aria-hidden="true">
      {kind === "cocktail" && <>
        <path className="illustration-wash" fill="currentColor" stroke="none" d="M61 84Q120 96 179 84Q164 134 120 140Q78 130 61 84Z" />
        <path className="ink-trace" pathLength="1" d="M53 69Q120 84 187 69Q178 127 120 143Q62 126 53 69ZM120 143V192M92 196Q120 186 148 196" />
        <ellipse cx="120" cy="69" rx="67" ry="14" />
        <path className="ink-trace" pathLength="1" d="M32 30V57Q32 91 53 93M65 29V51Q65 73 53 78M49 98C10 160 50 220 115 216S202 211 208 160" />
        <circle cx="208" cy="148" r="12" /><circle cx="208" cy="148" r="5" />
        <path d="M155 69L178 25M169 28Q206 22 196 53" />
        <path className="garnish-twinkle" d="M207 74V88M200 81H214" />
      </>}
      {kind === "citrus" && <>
        <circle className="illustration-wash" fill="currentColor" stroke="none" cx="117" cy="128" r="73" />
        <circle className="ink-trace" pathLength="1" cx="117" cy="128" r="74" /><circle cx="117" cy="128" r="62" />
        <path className="ink-trace" pathLength="1" d="M117 70V118M117 138V187M59 128H107M127 128H175M77 88L110 121M124 135L158 169M77 169L110 135M124 121L158 88" />
        <circle cx="117" cy="128" r="7" />
        <path className="ink-trace" pathLength="1" d="M125 50Q135 14 184 29Q168 66 131 55M130 52L168 35M37 48V66M28 57H46" />
        <path className="garnish-twinkle" d="M200 180V194M193 187H207" />
      </>}
      {kind === "shaker" && <>
        <path className="illustration-wash" fill="currentColor" stroke="none" d="M77 111H160L150 205H88Z" />
        <path className="ink-trace" pathLength="1" d="M77 111L88 205Q121 216 151 205L162 111M74 107Q118 118 165 107L153 75Q121 65 87 75ZM99 70L101 43Q120 34 141 43L143 70" />
        <path d="M89 124L95 186M105 48L104 64M151 85L157 101M92 203Q123 197 149 203" />
        <path className="ink-trace" pathLength="1" d="M49 105L27 123M45 77L19 79M183 81L212 70M180 106L209 119" />
        <path className="garnish-twinkle" d="M181 30V49M172 40H191" />
      </>}
      {kind === "story" && <>
        <path className="illustration-wash" fill="currentColor" stroke="none" d="M43 99L104 114Q89 152 58 138ZM143 113L202 97Q190 142 160 140Z" />
        <path className="ink-trace" pathLength="1" d="M35 83L111 104Q99 145 67 146Q35 133 35 83ZM67 146L55 191M35 191L76 202M132 102L207 81Q211 130 181 144Q148 148 132 102ZM181 144L194 190M174 201L215 189" />
        <path className="ink-trace" pathLength="1" d="M119 72C75 44 99 17 119 39C140 17 164 44 119 72Z" />
        <path className="garnish-twinkle" d="M118 147V163M110 155H126M49 45V57M43 51H55M197 39V51M191 45H203" />
      </>}
    </svg>
  );
}
