//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
    name: 'questionItem',
    title: 'Question Item',
    type: 'object',
    icon: GrNavigate,
    fields: [
        {
            name: "question",
            type: "string",
            title: "Question"
        },
        {
            name: "answer",
            type: "string",
            title: "Answer"
        },
    ]
}