function Header() {
  return (
    <header className="py-6 border-b border-zinc-800">
      <div className="flex justify-between items-center max-w-4xl mx-auto px-4">
        <h1 className="text-xl font-bold">
          <a href="/" className="hover:no-underline">Mahesa Iqbal</a>
        </h1>
        <nav className="space-x-2">
          <a href="#about" className="px-2 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">About</a>
          <a href="#experiences" className="px-2 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Experiences</a>
          <a href="#projects" className="px-2 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Projects</a>
          <a href="#contact" className="px-2 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header