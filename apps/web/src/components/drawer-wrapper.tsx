import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  } from "@workspace/ui/components/drawer"
  import Navigation from "./navigation.tsx"
  import { ListIcon, XIcon } from "@phosphor-icons/react"


export default function DrawerWrapper(){
	return (
<Drawer direction="right">
		<DrawerTrigger>
		<ListIcon/>
		</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
    <DrawerTitle>	    <DrawerClose>
		    <Button variant="outline"><XIcon/></Button>


      </DrawerClose>
</DrawerTitle>
    </DrawerHeader>
    <Navigation className="grid"/>
  </DrawerContent>
</Drawer>)
}

