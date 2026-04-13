

interface Props {
  className?: string
}

function Gradient({ className = 'absolute w-full h-full bg-radial from-transparent to-70% to-black/90 pointer-events-none -z-10' }: Props) {
  return (<div className={className}></div>)
}

export default Gradient
