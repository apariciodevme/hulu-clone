
const HeaderItem = ({Icon, title}) => {
  return (
    <div className="flex flex-col items-center w-12 cursor-pointer group sm:w-20 hover:text-white">
        <Icon className='w-6 h-6 mb-1 transition duration-200 group-hover:animate-bounce' />
        <p className="text-xs tracking-wider uppercase transition duration-200 ease-in-out opacity-0 group-hover:opacity-100 ">{title}</p>
    </div>
  )
}

export default HeaderItem