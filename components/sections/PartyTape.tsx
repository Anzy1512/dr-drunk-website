export function PartyTape() {
  return <div className="party-tape" aria-label="Mixology. Mischief. Memories.">
    <div className="party-tape-track" aria-hidden="true">{[0,1,2,3].map((i) => <span key={i}>MIXOLOGY <b>✳</b> MISCHIEF <b>✳</b> MEMORIES <b>✳</b></span>)}</div>
  </div>;
}
