export default function SeeAll() {
  return (
    <>
      <div className="flex flex-wrap gap-4 pt-8">
        {results.map((item) => (
          <Link
            key={item.id}
            href={getItemHref(item, media)}
            className="flex flex-col gap-2 w-[235px]"
          >
            <Image
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={getItemTitle(item)}
              width={256}
              height={384}
              className="object-cover rounded-lg h-[353px]"
            />
            <p>{getItemTitle(item)}</p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        {currentPage > 1 && (
          <Link
            href={`/${media}/${list}?page=${currentPage - 1}`}
            className="px-4 py-2 rounded border hover:text-blue transition-all duration-300"
          >
            <ChevronLeft size={30} />
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/${media}/${list}?page=${currentPage + 1}`}
            className="px-4 py-2 rounded border hover:text-blue transition-all duration-300"
          >
            <ChevronRight size={30} />
          </Link>
        )}
      </div>
    </>
  );
}
