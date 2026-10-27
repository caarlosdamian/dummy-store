// mismo layout que ProductDetail mientras carga el producto
export const ProductDetailSkeleton = () => {
  return (
    <div className="animate-pulse" role="status" aria-label="Loading product">
      {/* breadcrumb */}
      <div className="flex gap-2 pt-2 pb-5">
        <span className="h-3 w-12 rounded-full bg-[#EDEBE7]" />
        <span className="h-3 w-20 rounded-full bg-[#EDEBE7]" />
        <span className="h-3 w-32 rounded-full bg-[#EDEBE7]" />
      </div>

      <section className="grid gap-8 min-[900px]:grid-cols-2 min-[900px]:gap-10">
        {/* galeria */}
        <div className="flex flex-col gap-3">
          <div className="aspect-square rounded-2xl bg-[#EDEBE7]" />
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="aspect-square rounded-xl bg-[#EDEBE7]" />
            ))}
          </div>
        </div>

        {/* informacion */}
        <div className="flex flex-col gap-3">
          <span className="h-3 w-1/3 rounded-full bg-[#EDEBE7]" />
          <span className="h-8 w-4/5 rounded-full bg-[#EDEBE7]" />
          <span className="h-4 w-2/5 rounded-full bg-[#EDEBE7]" />
          <span className="mt-2 h-7 w-1/4 rounded-full bg-[#EDEBE7]" />

          <div className="mt-2 flex flex-col gap-2">
            <span className="h-3 w-full rounded-full bg-[#EDEBE7]" />
            <span className="h-3 w-full rounded-full bg-[#EDEBE7]" />
            <span className="h-3 w-3/4 rounded-full bg-[#EDEBE7]" />
          </div>

          <span className="h-3 w-1/4 rounded-full bg-[#EDEBE7]" />

          <div className="mt-2 flex gap-3">
            <span className="h-11 w-28 rounded-full bg-[#EDEBE7]" />
            <span className="h-11 flex-1 rounded-full bg-[#EDEBE7]" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="flex justify-between">
                <span className="h-3 w-16 rounded-full bg-[#EDEBE7]" />
                <span className="h-3 w-1/3 rounded-full bg-[#EDEBE7]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
