export default function Contact() {
  return (
    <main className="container mx-auto py-20 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Un projet ? Une question ? Écrivez-nous à{" "}
        <a href="mailto:contact@mvp-ia.com" className="text-primary underline">
          contact@mvp-ia.com
        </a>{" "}
        ou remplissez le formulaire ci-dessous.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded px-4 py-2"
          required
        />
        <textarea
          placeholder="Votre message"
          className="w-full border rounded px-4 py-2"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-2 rounded hover:bg-primary/90 transition"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}
