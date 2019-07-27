import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  const { image, name, status, species, gender, location, origin } = props.char;
  return (
    <div>
      <Card>
        <Image src={image} alt="character photos" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">
              {species} {gender} - {status}
            </span>
          </Card.Meta>
          <Card.Description>
            <p>Origin: {origin.name}</p>
            <p>Location: {location.name}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="video" />
          Episodes
        </Card.Content>
      </Card>
    </div>
  );
}
