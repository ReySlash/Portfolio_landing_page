function Footer() {
  return (
    <footer className="px-6 pb-8">
      <div className="flex w-full flex-col gap-2 border-t border-gray-800 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Reynaldo Carmenate Arias</p>
        <p>Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
