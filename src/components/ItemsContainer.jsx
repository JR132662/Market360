import Item from "./Item"
import {Services, Contact, Location, Info} from '../constants/Menu'

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={Services} title="Services" />
        <Item Links={Contact} title="Contact" />
        <Item Links={Location} title="Location" />
        <Item Links={Info} title="Information" />
    </div>
  )
}

export default ItemsContainer