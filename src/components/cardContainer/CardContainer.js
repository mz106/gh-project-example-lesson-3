import { Card } from "./Card/Card"

const CardContainer = (props) => {
    return (
        <Card />
    )
}

const tempProductArr = [
    {
        title: "Title 1",
        price: "£1",
        image: "TBD"
    },
    {
        title: "Title 2",
        price: "£2",
        image: "TBD"
    },
    {
        title: "Title 3",
        price: "£3",
        image: "TBD"
    },
    {
        title: "Title 4",
        price: "£4",
        image: "TBD"
    },
    {
        title: "Title 5",
        price: "£5",
        image: "TBD"
    },
    {
        title: "Title 6",
        price: "£6",
        image: "TBD"
    },
]

export { CardContainer, tempProductArr }