import { createStrutureSelector } from 'reselect'
import { connect } from 'react-redux'
//import selectCollections from '../../redux/'

const CollectionOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

// const mapStateToProps = createStrutureSelector(
//     collections: select
// )
