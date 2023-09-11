export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-2">
      <small className="text-neutral-500">&copy; {year}</small>
    </footer>
  );
}
