import { PackageSearch } from 'lucide-react';

// se muestra cuando la busqueda no devuelve productos
export const ProductListEmpty = () => {
  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 py-20 text-center text-[#57534E]"
      role="status"
    >
      <div className="flex size-16 items-center justify-center rounded-full bg-[#F6F5F2]">
        <PackageSearch size={28} aria-hidden="true" />
      </div>
      <h2 className="text-lg font-bold text-[#1C1917]">No products found</h2>
      <p className="max-w-xs text-sm">
        Try a different search or check back later.
      </p>
    </section>
  );
};
