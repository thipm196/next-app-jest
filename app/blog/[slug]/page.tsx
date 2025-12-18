type Params = {
  params: {
    slug: string;
  };
};

// export async function generateStaticParams() {
//   // Liệt kê tất cả slug bạn muốn build sẵn
//   return [
//     { slug: "hello-world" },
//     { slug: "another-post" },
//   ];
// }


export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug : {params.slug}</h1>
}
