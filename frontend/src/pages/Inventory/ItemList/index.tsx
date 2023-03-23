import { useEffect } from "react";
import { get } from "../../../apiInterface";

export interface Item {
    itemID: string;
    userID: string;
    taskLink: string;
    itemName: string;
    createdAt: string;
    description: string;
    image: string;
    history: string[];
  }

interface ItemsListProps {
  onItemsLoaded: (items: Item[]) => void;
}

function ItemsList({ onItemsLoaded }: ItemsListProps) {
  useEffect(() => {
    get("getItems", [
      "itemID",
      "userID",
      "taskLink",
      "itemName",
      "createdAt",
      "description",
      "image",
      "history"
    ]).then((items) => onItemsLoaded(items));
  }, [onItemsLoaded]);

  return null; // ItemsList doesn't need to render anything
}

export default ItemsList;