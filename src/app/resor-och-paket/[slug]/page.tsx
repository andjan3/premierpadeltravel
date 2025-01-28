import { getAllResor } from "@/app/lib/get-all-resor";
import { getResor } from "@/app/lib/get-resor";
import { Packages } from "@/components/packages";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const paket = await getResor(pathname);

  return (
    <div>
      <Packages paket={paket} />
    </div>
  );
};

export default page;
