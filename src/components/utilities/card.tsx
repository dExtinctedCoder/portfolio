import { IconType } from "react-icons/lib"

export type cardPropsType = {
  Icon: IconType
  Title: string
}

const Card = ({Icon, Title, ...props}: cardPropsType) => {
  return (
    <div className="w-48 bg-[#bbee03] aspect-square flex items-center justify-center gap-y-6 shadow-lg rounded-lg flex-col dark:bg-[#292929] md:w-52">
      <Icon fontSize={38} className="text-purple dark:text-green-light" />
      <span className="uppercase text-lg text-purple dark:text-green-light">{Title}</span>
    </div>
  )
}

export default Card