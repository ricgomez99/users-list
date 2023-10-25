import { Name } from "../../utils/types";

interface UserProps {
  name: Name;
  phone: string;
  email: string;
  img: string;
}

function UserDetails({ name, phone, email, img }: UserProps) {
  const fullName = `${name.first} ${name.last}`;
  return (
    <div className="flex flex-row align-center p-[10px] justify-between w-[100%] gap-[30px] ">
      <img
        className="w-[40px] h-[40px] object-contain rounded-[100px]"
        src={img}
      />
      <div className="flex flex-col w-[100%]">
        <h3 className="text-red-300 ">{fullName}</h3>
        <span className="mr-[8px]">{phone}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default UserDetails;
