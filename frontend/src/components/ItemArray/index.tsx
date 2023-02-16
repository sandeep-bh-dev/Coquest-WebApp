import * as React from "react";

export interface Item {
    itemId: string,
    image: string,
    taskName: string,
    itemName: string,
    description: string,
    groupName: string,
    taskLink: string,
    owner: string,
    date: Date
}

export const Items: Item[] = [
    {
        itemId: "1",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        taskName: "PROJECT OR TASK NAME 1",
        itemName: "Item name 1",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        date: new Date(2004, 10, 20)
    },
    {
        itemId: "2",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        taskName: "PROJECT OR TASK NAME 2",
        itemName: "Item name 2",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share 2",
        taskLink: "Buy [this item]",
        owner: "Jeff Holderson",
        date: new Date(2020, 5, 30)
    },
    {
        itemId: "3",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        taskName: "PROJECT OR TASK NAME 3",
        itemName: "Item name 3",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share 3",
        taskLink: "Buy [this item]",
        owner: "Jane Smith",
        date: new Date(2015, 6, 20)
    },
    {
        itemId: "4",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        taskName: "PROJECT OR TASK NAME 4",
        itemName: "Item name 4",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share 4",
        taskLink: "Buy [this item]",
        owner: "Bob Dylan",
        date: new Date(2022, 10, 20)
    },
    {
        itemId: "5",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        taskName: "PROJECT OR TASK NAME 5",
        itemName: "Item name 5",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share 5",
        taskLink: "Buy [this item]",
        owner: "Mark Bryerson",
        date: new Date(2002, 12, 5)
    },
    {
        itemId: "6",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        taskName: "PROJECT OR TASK NAME 6",
        itemName: "Item name 6",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share 6",
        taskLink: "Buy [this item]",
        owner: "Jane Smith",
        date: new Date(2010, 1, 2)
    },
    {
        itemId: "7",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        taskName: "PROJECT OR TASK NAME 7",
        itemName: "Item name 7",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share 7",
        taskLink: "Buy [this item]",
        owner: "Sarah Gregson",
        date: new Date(2022, 10, 20)
    },
    {
        itemId: "8",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        taskName: "PROJECT OR TASK NAME 8",
        itemName: "Item name 8",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share 8",
        taskLink: "Buy [this item]",
        owner: "Jonathan Smith",
        date: new Date(2023, 7, 16)
    }
]