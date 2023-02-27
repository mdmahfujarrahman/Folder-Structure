export const FolderStructure = {
    name: "root",
    children: [
        {
            id: 1,
            name: "folder 1",
            type: "folder",
            children: [
                {
                    id: 5,
                    name: "folder 3",
                    children: [{ id: 5, name: "folder 5", children: [] }],
                },
                { id: 5, name: "folder 3", children: [] },
                { id: 5, name: "folder 3", children: [] },
            ],
        },
        {
            id: 2,
            name: "folder 2",
            children: [
                { id: 5, name: "folder 3", children: [] },
                { id: 5, name: "folder 3", children: [] },
                { id: 5, name: "folder 3", children: [] },
            ],
        },
    ],
};
