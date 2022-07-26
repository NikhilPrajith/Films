//{} is for destructring  rather than using props and doing props.item,etc
function HeaderItem({Icon, title}) {
  return (
    //Tailwind is mobile first, sm-20 is for when you hit the small break point change the width to 20
    //the animations are super easy look at the animate-bounce
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem