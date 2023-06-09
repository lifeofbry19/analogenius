import LikeButton from "@/components/LikeButton";
import supabaseServerClient from "@/utils/supabase-server";
import { tagConverter } from "@/utils/tagConverter";
import FavoriteButton from "@/components/FavoriteButton";

export const revalidate = 0;

async function getQuery(supabase, id) {
  const { data, error } = await supabase
    .from("queries")
    .select("*")
    .eq("id", id)
    .select("*")
    .single();
  if (error) {
    console.log(error);
    return [];
  }
  return data;
}

async function getUser(supabase, email) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email)
    .select("*")
    .single();
  if (error) {
    console.log(error);
    return [];
  }
  return data;
}

export default async function QueryPage({ params }) {
  const supabase = supabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const query = await getQuery(supabase, params.id);
  let user;
  if (data?.user) user = await getUser(supabase, data.user.email);

  if (!query) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-1/2 mb-5 max-w-7xl min-h-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-5">{query?.concept}</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="w-full text-sm md:text-lg p-4  border border-base-200 shadow-lg bg-base-100">
          <p>{query?.response}</p>{" "}
          {user && (
            <FavoriteButton
              favoritesArr={user?.favorites}
              favorite={user?.favorites?.includes(query?.id)}
              id={query?.id}
              userId={user?.id}
            />
          )}
        </div>
        <div className="self-start flex justify-center items-center  mt-2">
          {" "}
          {query?.tags &&
            query.tags.map((tag, idx) => {
              return (
                <div
                  key={idx}
                  className=" h-12 p-2 w-fit  ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md"
                >
                  {" "}
                  <p>
                    {tagConverter[tag.split(" ").join("").toLowerCase()]}
                  </p>{" "}
                </div>
              );
            })}{" "}
          <LikeButton
            likes={query?.likes}
            id={query?.id}
            userLiked={user?.likes && user?.likes?.includes(query?.id)}
            user={user}
          />
        </div>
      </div>
    </div>
  );
}
