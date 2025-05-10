import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const axiosSecure = UseAxiosSecure();
  const [page, setPage] = useState(0);
  const limit = 10;

  const { data, isLoading, isFetching, isPreviousData } = useQuery({
    queryKey: ["allProducts", page],
    queryFn: async () => {
      const filterObj = {
        Skip: page * limit,
        Limit: limit,
        Types: [1],
      };
      const filterParam = btoa(JSON.stringify(filterObj));
      const res = await axiosSecure.get(
        `/Materials/GetAll/?filter=${filterParam}`
      );
      return res.data;
    },
    keepPreviousData: true,
    staleTime: 1000 * 60 * 1,
  });
  console.log(data);
  const total = data?.TotalCount || 0;
  const totalPages = Math.ceil(total / limit);

  if (isLoading) return <p>Loading products...</p>;

  return (
    <div className="px-10 py-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.Materials?.map((product) => (
          <ProductCard key={product.Id} product={product}></ProductCard>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          disabled={page === 0}
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page + 1} of {totalPages}
        </span>

        <button
          disabled={isPreviousData || page + 1 === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {isFetching && (
        <p className="text-center mt-2">Loading more products...</p>
      )}
    </div>
  );
};

export default AllProducts;
