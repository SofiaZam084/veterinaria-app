import "../styles/Form.css";

export default function Contacto() {
  return (
    <section className="form-section fade-in contacto-bg">
        <form>
          <h1>Contáctanos</h1>
          <label>Nombre:
            <input type="text" required />
          </label>
          <label>Email:
            <input type="email" required />
          </label>
          <label>Mensaje:
            <textarea rows="4" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
    </section>
  );
}