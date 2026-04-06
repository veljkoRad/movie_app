import Container from "@/components/UI/Container";
import Image from "next/image";
import { getTvDetails, getPeopleShow } from "@/lib/tmdb/shows";
import SinglePage from "@/components/SinglePage/SinglePage";

type TvDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function TvDetails({ params }: TvDetailsProps) {
  const { id } = await params;
  const tv = await getTvDetails(id);
  console.log(tv);
  const peopleShow = (await getPeopleShow(id)).cast;
  return <SinglePage single={tv} cast={peopleShow} type="show" />;
}
