const productSchema = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
        },
        {
            name: "type",
            type: "string",
            title: "Type",
            options: {
                list: [
                    { title: "Type 1", value: "type1" },
                    { title: "Type 2", value: "type2" },
                    { title: "Type 3", value: "type3" },
                ],
            },
        },
        {
            name: "image",
            type: "image",
            title: "Image",
        },
        {
            name: "description",
            type: "string",
            title: "Description",
        },
    ],
};

export default productSchema;
