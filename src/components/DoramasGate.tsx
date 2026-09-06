import { useEffect, useRef, useState } from "react";
import { KeyRound, Lock, X } from "lucide-react";

/**
 * Trava de acesso aos doramas.
 *
 * A senha NÃO fica em texto puro no código: guardamos apenas o hash SHA-256 e
 * comparamos com o hash do que a pessoa digitou. Quem acerta fica liberado para
 * sempre neste aparelho (localStorage).
 */

const STORAGE_KEY = "doramas_liberado";

/** SHA-256 da senha de acesso. */
const SENHA_HASH = "7d054eae18f076f1435f535b1608c46cea4cce883111bdba36e0e4dd0ed2830d";

async function sha256Hex(texto: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function useDoramasLiberado() {
  const [liberado, setLiberado] = useState(false);
  const [checado, setChecado] = useState(false);

  useEffect(() => {
    try {
      setLiberado(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      /* localStorage indisponível — segue bloqueado */
    }
    setChecado(true);
  }, []);

  const liberar = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignora: libera ao menos nesta sessão */
    }
    setLiberado(true);
  };

  return { liberado, checado, liberar };
}

export function DoramasGate({
  onLiberado,
  onFechar,
}: {
  onLiberado: () => void;
  onFechar: () => void;
}) {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [verificando, setVerificando] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = anterior;
    };
  }, []);

  const tentar = async () => {
    if (verificando) return;
    setVerificando(true);
    try {
      const ok = (await sha256Hex(senha.trim())) === SENHA_HASH;
      if (ok) {
        setErro(false);
        onLiberado();
      } else {
        setErro(true);
      }
    } catch {
      setErro(true);
    } finally {
      setVerificando(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Inserir senha para assistir"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
    >
      <div className="relative my-8 w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#1a0730] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <button
          type="button"
          onClick={onFechar}
          aria-label="Fechar"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white/80 transition hover:bg-black/60"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-6 pb-6 pt-8 text-center sm:px-8">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c026d3] to-[#7e22ce] text-white shadow-lg shadow-fuchsia-900/40">
            <Lock className="h-6 w-6" />
          </span>
          <h2 className="mt-4 text-xl font-bold text-white">Conteúdo protegido</h2>
          <p className="mx-auto mt-1 max-w-[320px] text-sm text-white/70">
            Digite a senha de acesso enviada em seu{" "}
            <span className="whitespace-nowrap">e-mail</span> para assistir aos doramas.
          </p>

          <div className="mt-5 flex gap-2">
            <div className="relative flex-1">
              <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                ref={inputRef}
                type="password"
                autoComplete="off"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  if (erro) setErro(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") void tentar();
                }}
                placeholder="Senha de acesso"
                aria-label="Senha de acesso"
                aria-invalid={erro}
                className="h-11 w-full rounded-lg border border-white/15 bg-black/30 pl-9 pr-3 text-sm text-white placeholder:text-white/35 focus:border-[#c026d3] focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => void tentar()}
              disabled={verificando || !senha.trim()}
              className="h-11 shrink-0 rounded-lg bg-gradient-to-b from-[#c026d3] to-[#7e22ce] px-5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-50"
            >
              Entrar
            </button>
          </div>

          {erro && (
            <p className="mt-2 text-xs font-medium text-red-300">
              Senha incorreta. Tente novamente.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
