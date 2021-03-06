import React from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from '../collection/collection.component'
import CollectionOverview from '../../components/collection-overview/collection-overview-component'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/shop/shop.selector'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
  state = {
    loading: true,
  }
  unsubscribeFromSnapshot = null
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
