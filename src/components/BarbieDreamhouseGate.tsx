import { useEffect, useState } from "react";
import { KeyRound, ShoppingCart, X } from "lucide-react";

/**
 * Acesso exclusivo de "Barbie: Life in the Dreamhouse".
 *
 * Independente das travas de "Para colorir" e "Doramas Flix": ter acesso a
 * qualquer uma delas (ou a "Todos os desenhos") não libera este título.
 * Quem acerta a senha fica liberado para sempre neste aparelho (localStorage).
 */

const SENHA_ACESSO = "0001";

const CHECKOUT_URL = "https://pay.lowify.com.br/checkout?product_id=bHTfSX";

const STORAGE_KEY = "barbie_dreamhouse_liberado";

export function useBarbieDreamhouseLiberado() {
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

export function BarbieDreamhouseGate({
  bannerUrl,
  onLiberado,
  onFechar,
}: {
  bannerUrl?: string | undefined;
  onLiberado: () => void;
  onFechar: () => void;
}) {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = anterior;
    };
  }, []);

  const entrar = () => {
    if (senha.trim() === SENHA_ACESSO) {
      setErro(false);
      onLiberado();
    } else {
      setErro(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Digite a senha de acesso — Barbie: Life in the Dreamhouse"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
    >
      <div className="relative my-8 w-full max-w-[440px] overflow-hidden rounded-[24px] border border-white/10 bg-[#2a0f22] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <div className="relative h-[132px] w-full overflow-hidden bg-gradient-to-br from-[#ff5fa2] to-[#7e1f5c]">
          {bannerUrl && (
            <img
              src={bannerUrl}
              alt=""
              aria-hidden
              className="h-full w-full object-cover object-top opacity-90"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2a0f22]" />
          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/90 transition hover:bg-black/70"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 pb-6 pt-2 text-center sm:px-8">
          <h2 className="text-xl font-bold text-white">Barbie: Life in the Dreamhouse</h2>
          <p className="mx-auto mt-2 max-w-[340px] text-sm leading-relaxed text-white/70">
            Este título tem acesso próprio. Digite sua senha de acesso para assistir aos
            episódios.
          </p>

          <div className="mt-5 rounded-2xl border border-[#e6b34d]/60 bg-[#e6b34d]/[0.06] p-4 text-left">
            <label
              htmlFor="barbie-dreamhouse-senha"
              className="flex items-center gap-2 text-sm font-bold text-[#e6b34d]"
            >
              <KeyRound className="h-4 w-4" />
              Senha de acesso
            </label>
            <div className="mt-3 flex gap-2">
              <input
                id="barbie-dreamhouse-senha"
                type="password"
                autoComplete="off"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  if (erro) setErro(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") entrar();
                }}
                placeholder="Digite a senha"
                aria-label="Senha de acesso"
                aria-invalid={erro}
                className="h-11 min-w-0 flex-1 rounded-lg border border-white/15 bg-black/30 px-3 text-sm text-white placeholder:text-white/35 focus:border-[#e6b34d] focus:outline-none"
              />
              <button
                type="button"
                onClick={entrar}
                className="h-11 shrink-0 rounded-lg bg-[#e6b34d] px-5 text-sm font-bold text-[#2a0f22] transition hover:bg-[#f0c469]"
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

          <div className="my-5 h-px w-full bg-white/10" />

          <a
            href={CHECKOUT_URL}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#f0c469] to-[#e0a838] px-6 py-3.5 text-[15px] font-bold text-[#2a0f22] shadow-[0_8px_24px_rgba(224,168,56,0.35)] transition hover:brightness-105"
          >
            <ShoppingCart className="h-4 w-4" />
            Comprar acesso
          </a>
        </div>
      </div>
    </div>
  );
}
