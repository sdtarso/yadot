export function DrawerFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="text-center py-2">
      <small className="text-neutral-500">&copy; {year}</small>
    </div>
  );
}
