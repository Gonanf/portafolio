import { Button } from "@workspace/ui/components/button"

export default function Navigation({className}:{className: string}){

	return (
<div className={className}>
      <Button variant="ghost">
        <a href="/" className="text-base font-thin">INICIO</a>
      </Button>
      <Button variant="ghost">
        <a href="/sobre" className="text-base font-thin">SOBRE MI</a>
      </Button>

      <Button variant="ghost">
        <a href="/proyectos" className="text-base font-thin">PROYECTOS</a>
      </Button>

      <Button variant="ghost">
        <a href="/contactos" className="text-base font-thin">CONTACTOS</a>
      </Button>
    </div>)
}
