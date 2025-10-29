import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../state/auth.jsx";
import Loader from "../../components/ui/Loader.jsx";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!phone.trim() || !addressLine1.trim()) {
      setError("Nombre, Email, Contraseña, Teléfono y dirección son obligatorios");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await register({
        name,
        email,
        password,
        phone,
        addressLine1,
        addressLine2,
        city,
      });
      nav("/");
    } catch {
      setError("No se pudo registrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-4xl grid gap-8 rounded-3xl p-10 bg-[#870F11]/95 shadow-soft border-4 border-[#FFD000]">
      <h1 className="text-4xl text-center font-black text-[#FFD000] tracking-widest drop-shadow-[0_2px_1px_#000]">
        Crear Cuenta
      </h1>

      <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
        {[
          { placeholder: "Nombre", value: name, set: setName },
          { placeholder: "Email", value: email, set: setEmail, type: "email" },
          {
            placeholder: "Contraseña",
            value: password,
            set: setPassword,
            type: "password",
          },
          { placeholder: "Teléfono", value: phone, set: setPhone },
          { placeholder: "Dirección", value: addressLine1, set: setAddressLine1 },
          {
            placeholder: "Dirección 2 (opcional)",
            value: addressLine2,
            set: setAddressLine2,
          },
          { placeholder: "Ciudad", value: city, set: setCity },
        ].map((field, i) => (
          <input
            key={i}
            type={field.type || "text"}
            className="rounded-xl border-2 border-[#FFD000] bg-[#640B0C] text-[#FFD000] placeholder-[#FFD000]/75 font-semibold focus:ring-4 focus:ring-[#FFD000]/50 focus:outline-none transition-all col-span-2 md:col-span-1 p-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
            placeholder={field.placeholder}
            value={field.value}
            onChange={(e) => field.set(e.target.value)}
          />
        ))}

        {error && (
          <p className="text-[#FFD000] text-sm font-bold col-span-2 drop-shadow-[0_1px_1px_#000]">
            {error}
          </p>
        )}

        <button
          disabled={loading}
          className="rounded-xl bg-[#FFD000] text-[#870F11] font-black py-3 text-lg col-span-2 flex justify-center items-center gap-3 shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-[0.98] hover:bg-[#ffdf33] active:bg-[#e6c700] transition-all duration-150"
        >
          {loading ? <Loader size={28} /> : "Crear Cuenta"}
        </button>
      </form>

      <p className="text-sm text-center text-white mt-2">
        ¿Ya tienes cuenta?{" "}
        <Link
          className="font-black text-[#FFD000] underline hover:text-yellow-400 transition-colors"
          to="/login"
        >
          Entrar
        </Link>
      </p>
    </section>
  );
};

export default Register;
