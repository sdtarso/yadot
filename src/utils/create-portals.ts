export default function createDomNodeForPortal(id: string) {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", id);

  return drawerRoot;
}
