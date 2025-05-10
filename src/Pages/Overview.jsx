import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Headline from "../Shared/Headline";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";

const Overview = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  console.log(user);

  const { data, isLoading } = useQuery({
    queryKey: ["productStats"],
    queryFn: async () => {
      try {
        const filterObj = { Skip: 0, Limit: 20, Types: [1] };
        const filterParam = btoa(JSON.stringify(filterObj));
        const res = await axiosSecure.get(
          `/Materials/GetAll/?filter=${filterParam}`
        );
        return res.data;
      } catch (err) {
        console.error("API call failed:", err);
        throw err;
      }
    },
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="px-4 md:px-10">
      <Headline
        title="AquaTech Overview"
        description="Manage fish and gadgets inventory"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-success">
          <h3 className="text-xl font-semibold mb-2">Admin Tools</h3>
          <p className="text-lg">Welcome back! Full access enabled</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-primary">
          <h3 className="text-xl font-semibold mb-2">Total Products</h3>
          <p className="text-4xl font-bold text-primary">
            {data?.TotalCount || 0}
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-secondary">
          <h3 className="text-xl font-semibold mb-2">Aquatic Species</h3>
          <p className="text-4xl font-bold text-secondary">
            {(data?.TotalCount / 2).toFixed(0) || 0}
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-accent">
          <h3 className="text-xl font-semibold mb-2">Gadgets</h3>
          <p className="text-4xl font-bold text-accent">
            {(data?.TotalCount / 2).toFixed(0) || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
