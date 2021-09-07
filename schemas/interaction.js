export default {
    name: "interaction",
    title: "Interaction",
    type: "object",
    fields: [
        {
            name: "sentiment",
            title: "Sentiment",
            type: "string",
            options: {
                list: [
                    {title: "Like", value: "like"},
                    {title: "Dislike", value: "dislike"},
                ],
                layout: "radio"
            }
        },
        {
            name: "comment",
            title: "Comment",
            type: "string"
        },
        {
            name: "commenter",
            title: "Commenter",
            type: "commenter"
        }
    ],
    preview: {
        select: {
            title: "sentiment",
            subtitle: "comment"
        }
    }
}