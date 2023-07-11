import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Image from "next/image";
import requests from "@/utils/requests";
import Results from "@/components/Results";


export default function Home({results}) {
  console.log(results)
  return (
    <main>
      <Header />
      <Nav />
      <Results results={results}/>
    </main>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }` 
  ).then((res) => res.json());


  return {
    props: {
      results: request.results
    }
  }
}
