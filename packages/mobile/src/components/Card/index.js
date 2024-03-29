import React from 'react';
import { format, parseISO, isBefore } from 'date-fns';
import PropTypes from 'prop-types';

import {
  Container,
  Banner,
  Info,
  Title,
  Row,
  RowIcon,
  Text,
  ActionButton,
} from './styles';

export default function Card({
  banner,
  title,
  date,
  location,
  host,
  actionText,
  actionFunction,
}) {
  const formattedDate = format(parseISO(date), 'EEE, MMM d, h:mm a');
  const past = isBefore(parseISO(date), new Date());

  return (
    <Container>
      <Banner source={{ uri: banner && banner.url }} />
      <Info>
        <Title>{title}</Title>
        <Row>
          <RowIcon name="event" />
          <Text>{formattedDate}</Text>
        </Row>
        <Row>
          <RowIcon name="location-on" />
          <Text>{location}</Text>
        </Row>
        <Row>
          <RowIcon name="person" />
          <Text>Host: {host}</Text>
        </Row>
        {!past && (
          <ActionButton onPress={actionFunction}>{actionText}</ActionButton>
        )}
      </Info>
    </Container>
  );
}

Card.propTypes = {
  banner: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  actionFunction: PropTypes.func.isRequired,
};
