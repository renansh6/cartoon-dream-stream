import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { KeyRound, ShoppingCart, X } from "lucide-react";

/**
 * Portão de acesso da aba "Para colorir".
 *
 * - Código de liberação: quem já comprou digita e o acesso fica salvo
 *   para sempre neste aparelho (localStorage).
 * - Quem ainda não comprou vai para o checkout.
 */

/** Código que libera o acesso. */
const CODIGO_LIBERACAO = "0001";

/** Checkout de compra (quem ainda não liberou). */
const CHECKOUT_URL = "https://pay.lowify.com.br/checkout?product_id=2XBYQz";

const STORAGE_KEY = "colorir_liberado";

export function useColorirLiberado() {
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

export function ColorirGate({
  bannerUrl,
  onLiberado,
}: {
  bannerUrl?: string | undefined;
  onLiberado: () => void;
}) {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = anterior;
    };
  }, []);

  const tentarLiberar = () => {
    if (codigo.trim() === CODIGO_LIBERACAO) {
      setErro(false);
      onLiberado();
    } else {
      setErro(true);
    }
  };

  const irParaCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Liberar acesso aos desenhos para colorir"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
    >
      <div className="relative my-8 w-full max-w-[460px] overflow-hidden rounded-[24px] border border-white/10 bg-[#2a0f22] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        {/* Cabeçalho com imagem */}
        <div className="relative h-[132px] w-full overflow-hidden bg-gradient-to-br from-[#7b2a63] to-[#3a1530]">
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
            onClick={() => navigate({ to: "/" })}
            aria-label="Fechar e voltar ao início"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/90 transition hover:bg-black/70"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 pb-6 pt-2 text-center sm:px-8">
          <h2 className="text-xl font-bold text-white">Desenhos para colorir</h2>
          <p className="mt-1 text-sm text-white/70">Coleção não liberada</p>
          <p className="mx-auto mt-2 max-w-[340px] text-sm leading-relaxed text-white/70">
            Essa coleção ainda não faz parte do seu acesso. Você pode liberar agora e imprimir
            na hora.
          </p>

          {/* Caixa do código */}
          <div className="mt-5 rounded-2xl border border-[#e6b34d]/60 bg-[#e6b34d]/[0.06] p-4 text-left">
            <p className="flex items-center gap-2 text-sm font-bold text-[#e6b34d]">
              <KeyRound className="h-4 w-4" />
              Já comprou? Digite o seu código
            </p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              Ele veio no e-mail de confirmação. Digite uma vez e a coleção fica liberada para
              sempre neste aparelho.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                autoComplete="off"
                value={codigo}
                onChange={(e) => {
                  setCodigo(e.target.value);
                  if (erro) setErro(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") tentarLiberar();
                }}
                placeholder="EX.: desenhosparacolorir"
                aria-label="Código de liberação"
                aria-invalid={erro}
                className="h-11 min-w-0 flex-1 rounded-lg border border-white/15 bg-black/30 px-3 text-sm text-white placeholder:text-white/35 focus:border-[#e6b34d] focus:outline-none"
              />
              <button
                type="button"
                onClick={tentarLiberar}
                className="h-11 shrink-0 rounded-lg bg-[#e6b34d] px-5 text-sm font-bold text-[#2a0f22] transition hover:bg-[#f0c469]"
              >
                Liberar
              </button>
            </div>
            {erro && (
              <p className="mt-2 text-xs font-medium text-red-300">
                Código inválido. Confira o e-mail de confirmação e tente de novo.
              </p>
            )}
          </div>

          <div className="my-5 h-px w-full bg-white/10" />

          {/* Compra */}
          <button
            type="button"
            onClick={irParaCheckout}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#f0c469] to-[#e0a838] px-6 py-3.5 text-[15px] font-bold text-[#2a0f22] shadow-[0_8px_24px_rgba(224,168,56,0.35)] transition hover:brightness-105"
          >
            <ShoppingCart className="h-4 w-4" />
            Comprar e liberar agora
          </button>
        </div>
      </div>
    </div>
  );
}

/** Envolve o conteúdo da aba: desfoca e bloqueia cliques enquanto não liberado. */
export function ColorirBlur({ ativo, children }: { ativo: boolean; children: ReactNode }) {
  return (
    <div
      className={
        ativo ? "pointer-events-none select-none blur-sm" : undefined
      }
      aria-hidden={ativo}
    >
      {children}
    </div>
  );
}
