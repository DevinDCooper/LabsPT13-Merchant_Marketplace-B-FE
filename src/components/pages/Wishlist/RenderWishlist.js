import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import WishlistCard from '../../common/wishlistCard.js';

import NavigationBar from '../../common/NavigationBar';

const Wrapper = styled.div`
  .Wishlist__ad {
    width: 100%;
    margin-bottom: 10px;
  }

  .Wishlist__title {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
`;

const RenderWishlist = () => {
  const { wishlists } = useSelector(state => state.wishlists);
  return (
    <Wrapper>
      <NavigationBar />
      <img
        className="Wishlist__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg "
        alt=" "
      />
      <div>
        <h1 className="Wishlist__title">Wishlist</h1>
      </div>
      {wishlists.map(p => (
        <WishlistCard key={p.id} product={p} />
      ))}
    </Wrapper>
  );
};
export default RenderWishlist;