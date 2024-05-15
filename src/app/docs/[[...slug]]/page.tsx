import { notFound } from "next/navigation";

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug[0]=== "not") {
    notFound()
  }
  else if (params.slug?.length === 2) {
    return (
      <h1>
        Docs {params.slug[0]} and {params.slug[1]}
      </h1>
    );
  } else return <h1>Docs home page</h1>;
}
