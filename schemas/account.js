export default {
    name: "account",
    title: "Account",
    type: "document",
    fields: [
        {
            name: "username",
            title: "Username",
            type: "string",
            validation: Rule => Rule.required().warning('A Username is required')
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "username",
                maxLength: 100
            },
            validation: Rule => Rule.required().warning('A Slug is required')
        },
        {
            name: "id",
            title: "ID",
            type: "number",
            validation: Rule => Rule.required().warning('An ID is required')
        },
        {
            name: "avatar",
            title: "Avatar",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "subscribers",
            title: "Subscribers",
            type: "number"
        },
        {
            name: "videos",
            title: "Videos",
            type: "array",
            of: [{type: "videoReference"}]
        }
    ]
}


