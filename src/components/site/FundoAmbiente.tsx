/**
 * Fundo ambiente — "água viva" perceptível atrás/entre o conteúdo.
 * - 3 manchas de luz desfocadas à deriva (aqua, dourado e azul-noite)
 * - 12 bolhas translúcidas subindo lentamente pela tela
 * Camada fixa em z-20: fica ACIMA dos fundos das seções (z-10) e
 * ABAIXO da barra de compra (z-30), header e botões (z-50).
 */

const BLOBS = [
  {
    classe: "luz-ambiente",
    anim: "luz-a 44s ease-in-out infinite",
    bg: "radial-gradient(circle, rgba(31,163,199,0.17) 0%, transparent 70%)",
    style: {
      width: "46vw",
      height: "46vw",
      top: "-10vh",
      left: "-8vw",
    },
  },
  {
    classe: "luz-ambiente",
    anim: "luz-b 54s ease-in-out infinite",
    bg: "radial-gradient(circle, rgba(204,190,133,0.14) 0%, transparent 70%)",
    style: {
      width: "40vw",
      height: "40vw",
      top: "42vh",
      right: "-10vw",
    },
  },
  {
    classe: "luz-ambiente",
    anim: "luz-c 60s ease-in-out infinite",
    bg: "radial-gradient(circle, rgba(23,129,158,0.12) 0%, transparent 70%)",
    style: {
      width: "42vw",
      height: "42vw",
      bottom: "-14vh",
      left: "22vw",
    },
  },
] as const;

const BOLHAS = [
  { left: "6%", size: 16, dur: 34, delay: -6, op: 0.26, sway: "26px" },
  { left: "14%", size: 9, dur: 44, delay: -19, op: 0.2, sway: "-18px" },
  { left: "23%", size: 22, dur: 29, delay: -12, op: 0.3, sway: "32px" },
  { left: "33%", size: 12, dur: 40, delay: -28, op: 0.22, sway: "-22px" },
  { left: "43%", size: 26, dur: 27, delay: -4, op: 0.32, sway: "30px" },
  { left: "54%", size: 14, dur: 36, delay: -16, op: 0.24, sway: "-26px" },
  { left: "63%", size: 10, dur: 46, delay: -33, op: 0.18, sway: "20px" },
  { left: "71%", size: 20, dur: 31, delay: -9, op: 0.28, sway: "-30px" },
  { left: "80%", size: 12, dur: 38, delay: -24, op: 0.22, sway: "24px" },
  { left: "88%", size: 24, dur: 28, delay: -14, op: 0.3, sway: "-20px" },
  { left: "95%", size: 9, dur: 42, delay: -37, op: 0.2, sway: "16px" },
  { left: "48%", size: 8, dur: 48, delay: -41, op: 0.18, sway: "-14px" },
] as const;

export default function FundoAmbiente() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {/* Manchas de luz à deriva */}
      {BLOBS.map((b, i) => (
        <div
          key={`blob-${i}`}
          className={b.classe}
          style={{
            ...b.style,
            background: b.bg,
            animation: b.anim,
          }}
        />
      ))}

      {/* Bolhas subindo devagar */}
      {BOLHAS.map((b, i) => (
        <span
          key={`bolha-${i}`}
          className="bolha-suave"
          style={
            {
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
              "--op": b.op,
              "--sway": b.sway,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
