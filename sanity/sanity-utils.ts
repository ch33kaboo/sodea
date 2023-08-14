// this is a file to make groq call and get content from the CMS

import { createClient, groq } from "next-sanity";

export async function getProducts() {
    const client = createClient({
        projectId: "hv3vqbgi",
        dataset: "production",
        apiVersion: "2023-07-11",
    });

    return client.fetch(
        groq`*[_type == "product"]{
            _id,
            _createdAt,
            name,
            type,
            "image": image.asset->url
        }`
    );
}

export async function getAboutContent() {
    const client = createClient({
        projectId: "hv3vqbgi",
        dataset: "production",
        apiVersion: "2023-07-11",
    });

    return client.fetch(
        groq`*[_type == "about"]{
            description_header,
            first_section{
                first_sub_paragraphe,
                second_sub_paragraphe,
                third_sub_paragraphe,
                "imageUrl": image.asset->url
            },
            second_section{
                first_sub_paragraphe,
                second_sub_paragraphe,
                third_sub_paragraphe,
                "imageUrl": image.asset->url
            }
        }`
    );
}
