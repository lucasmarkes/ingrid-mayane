export function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => {
        const left = (i * 8.3 + (i % 3) * 4) % 100
        const dur = 14 + (i % 5) * 3.5
        const size = 8 + (i % 4) * 3
        return (
          <span
            key={i}
            className="petal"
            style={{
              left: `${left}%`,
              width: size,
              height: size * 1.2,
              animationDuration: `${dur}s`,
              animationDelay: `${-i * 2.4}s`,
              opacity: 0.35 + (i % 3) * 0.12,
            }}
          />
        )
      })}
    </div>
  )
}
