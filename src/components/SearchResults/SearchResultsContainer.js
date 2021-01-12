import { connect } from 'react-redux';
import { searchCards } from '../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => ({
  cards:searchCards(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResults);