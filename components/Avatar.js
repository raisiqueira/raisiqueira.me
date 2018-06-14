import {Fragment} from 'react';
const Avatar = ({url, alt}) => (
  <Fragment>
    <img src={url} alt={alt} />
    <style jsx>
      {`
     img {
         border-radius: 50%;
         width: 100px;
         height: 100px;
         margin-bottom: 20px;
     }
    `}
    </style>
  </Fragment>
);

export default Avatar;
