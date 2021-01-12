/* eslint-disable react/prop-types */
import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {

    static propTypes = {
      title: PropTypes.string,
      addCard: PropTypes.func,
      icon: PropTypes.string,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }
    render() {
      const {cards} = this.props;
      return (
        <Container>
          <section className={styles.component}>
            <h3 className={styles.title}>
              <span className={styles.icon}>
                <Icon name= "sth"/>
              </span>
              Search Results
            </h3>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </section>
        </Container>
      );
    }
}

export default SearchResults;