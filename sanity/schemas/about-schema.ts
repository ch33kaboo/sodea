const aboutSchema = {
    name: "about",
    type: "document",
    title: "About",
    fields: [
        {
            name: "description_header",
            type: "string",
            title: "Description header",
        },
        {
            name: "first_section",
            type: "document",
            title: "First section",
            fields: [
                {
                    name: "first_sub_paragraphe",
                    type: "string",
                    title: "First sub_paragraphe",
                },
                {
                    name: "second_sub_paragraphe",
                    type: "string",
                    title: "Second sub_paragraphe",
                },
                {
                    name: "third_sub_paragraphe",
                    type: "string",
                    title: "Third sub_paragraphe",
                },
                {
                    name: "image",
                    type: "image",
                    title: "Image",
                },
            ],
        },
        {
            name: "second_section",
            type: "document",
            title: "Second section",
            fields: [
                {
                    name: "first_sub_paragraphe",
                    type: "string",
                    title: "First sub_paragraphe",
                },
                {
                    name: "second_sub_paragraphe",
                    type: "string",
                    title: "Second sub_paragraphe",
                },
                {
                    name: "third_sub_paragraphe",
                    type: "string",
                    title: "Third sub_paragraphe",
                },
                {
                    name: "image",
                    type: "image",
                    title: "Image",
                },
            ],
        },
    ],
};

export default aboutSchema;
