import { Button } from "@workspace/ui/components/button"

	export default function Navigation({className}:{className: string}){

	return (
<div class={className}>
      <Button variant="ghost">
        <a href="/" class="text-base font-thin">INICIO</a>
      </Button>
      <Button variant="ghost">
        <a href="/sobre" class="text-base font-thin">SOBRE MI</a>
      </Button>

      <Button variant="ghost">
        <a href="/proyectos" class="text-base font-thin">PROYECTOS</a>
      </Button>

      <Button variant="ghost">
        <a href="/contactos" class="text-base font-thin">CONTACTOS</a>
      </Button>
    </div>)
}

