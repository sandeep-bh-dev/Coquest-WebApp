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
    createdAt: string,
    isModalOpen: boolean
}

export const Items: Item[] = [
    {
        itemId: "1",
        taskName: "PROJECT OR PROGRAM NAME 1",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        itemName: "Item name 1",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        createdAt: "January 20, 2023",
        isModalOpen: false
    },
    {
        itemId: "2",
        taskName: "PROJECT OR PROGRAM NAME 2",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        itemName: "Item name 2",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        createdAt: "November 5, 2020",
        isModalOpen: false
    },
    {
        itemId: "3",
        taskName: "PROJECT OR PROGRAM NAME 3",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        itemName: "Item name 3",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        createdAt: "August 15, 2021",
        isModalOpen: false
    },
    {
        itemId: "3",
        taskName: "PROJECT OR PROGRAM NAME 4",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        itemName: "Item name 4",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        createdAt: "August 15, 2021",
        isModalOpen: false
    },
    {
        itemId: "3",
        taskName: "PROJECT OR PROGRAM NAME 5",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        itemName: "Item name 5",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        createdAt: "August 15, 2021",
        isModalOpen: false
    },
    {
        itemId: "3",
        taskName: "PROJECT OR PROGRAM NAME 6",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        itemName: "Item name 6",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        createdAt: "August 15, 2021",
        isModalOpen: false
    },
    {
        itemId: "3",
        taskName: "PROJECT OR PROGRAM NAME 7",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        itemName: "Item name 7",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        createdAt: "August 15, 2021",
        isModalOpen: false
    },
    {
        itemId: "3",
        taskName: "PROJECT OR PROGRAM NAME 8",
        image: "https://www.colorbook.io/imagecreator.php?hex=d9d9d9&width=1920&height=1080&text=%201920x1080",
        itemName: "Item name 8",
        description: "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque nisi elementum purus lorem dui non. Nec tempor nulla nisi mattis dolor. Diam arcu in augue cras. In tortor vulputate diam egestas. Ultricies natoque massa.",
        groupName: "Car share",
        taskLink: "Buy [this item]",
        owner: "John Doe",
        createdAt: "August 15, 2021",
        isModalOpen: false
    }
]