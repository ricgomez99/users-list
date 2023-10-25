import { useData } from "../../hooks/useData";
import { UserData } from "../../utils/types";
import UserDetails from "../UserDetails";

const RANDOM_USER = "https://randomuser.me/api/";

function UserDetailsList() {
  const { data, error } = useData<UserData>(`${RANDOM_USER}?results=30`);

  if (error) return <span>An error has occured</span>;
  if (!data) return <span>Loading</span>;

  return (
    <article className="w-[100%] h-[100%]">
      {data.results &&
        data.results.map((user) => (
          <UserDetails
            key={user.id.value}
            name={user.name}
            phone={user.phone}
            email={user.email}
            img={user.picture.thumbnail}
          />
        ))}
    </article>
  );
}

export default UserDetailsList;
