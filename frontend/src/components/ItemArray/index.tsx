import * as React from "react";

export interface Item {
    itemId: string,
    taskName: string,
    itemName: string,
    description: string,
    groupName: string,
    task: string,
    owner: string,
    date: Date,
    isModalOpen: boolean
}

export const Items: Item[] = [
    {
        itemId: "1",
        taskName: "PROJECT OR PROGRAM NAME 1",
        itemName: "Item name 1",
        description: "Pellentesque nisi elementum purus lorem dui non.",
        groupName: "Car share",
        task: "TEST 1",
        owner: "John Doe",
        date: new Date(2023, 10, 20),
        isModalOpen: false
    },
    {
        itemId: "2",
        taskName: "PROJECT OR PROGRAM NAME 2",
        itemName: "Item name 2",
        description: "Description. Lorem ipsum dolor sit amet consectetur.",
        groupName: "Dog walk",
        task: "Buy [this item]",
        owner: "Jesse McCree",
        date: new Date(2004, 10, 15),
        isModalOpen: false
    },
    {
        itemId: "3",
        taskName: "PROJECT OR PROGRAM NAME 3",
        itemName: "Item name 3",
        description: "Description.",
        groupName: "Car share 2",
        task: "TEST 2",
        owner: "Jane Smith",
        date: new Date(2022, 10, 20),
        isModalOpen: false
    }
]