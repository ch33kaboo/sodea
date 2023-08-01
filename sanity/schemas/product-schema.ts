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
