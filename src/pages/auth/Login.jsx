import { useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { useAuth } from "../../state/auth.jsx"
import Loader from "../../components/ui/Loader.jsx"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const nav = useNavigate()
  const { state } = useLocation()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      await login(email, password)
      nav(state?.from?.pathname || "/")
    } catch {
      setError("Credenciales inválidas")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-xl grid gap-8 rounded-3xl p-10 bg-[#870F11]/95 shadow-soft border-4 border-[#FFD000]">
      <h1 className="text-4xl text-center font-black text-[#FFD000] tracking-widest drop-shadow-[0_2px_1px_#000]">
        Iniciar Sesión
      </h1>

      <form onSubmit={onSubmit} className="grid gap-4">
        <input
          type="email"
          className="rounded-xl border-2 border-[#FFD000] bg-[#640B0C] text-[#FFD000] placeholder-[#FFD000]/75 font-semibold focus:ring-4 focus:ring-[#FFD000]/50 focus:outline-none transition-all p-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="rounded-xl border-2 border-[#FFD000] bg-[#640B0C] text-[#FFD000] placeholder-[#FFD000]/75 font-semibold focus:ring-4 focus:ring-[#FFD000]/50 focus:outline-none transition-all p-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-[#FFD000] text-sm font-bold drop-shadow-[0_1px_1px_#000]">
            {error}
          </p>
        )}

        <button
          disabled={loading}
          className="rounded-xl bg-[#FFD000] text-[#870F11] font-black py-3 text-lg flex justify-center items-center gap-3 shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-[0.98] hover:bg-[#ffdf33] active:bg-[#e6c700] disabled:opacity-60 transition-all duration-150"
        >
          {loading ? <Loader size={28} /> : "Entrar"}
        </button>
      </form>

      <p className="text-sm text-center text-white mt-2">
        ¿No tienes cuenta?{" "}
        <Link
          className="font-black text-[#FFD000] underline hover:text-yellow-400 transition-colors"
          to="/register"
        >
          Regístrate
        </Link>
      </p>
    </section>
  )
}

export default Login
