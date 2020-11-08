import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
const CardTeam = ({name,npm,desc,url,img}) => {
    return (
        <Card>
            <CardImg top width="100%" src={img} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{npm}</CardSubtitle>
                <CardText>{desc}</CardText>
                <a href={url} className="btn btn-primary">More</a>
            </CardBody>
        </Card>
    )
}

export default CardTeam
