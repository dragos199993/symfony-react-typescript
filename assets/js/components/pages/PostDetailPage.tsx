import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import axios from 'axios';

const PostDetailPage: FunctionComponent<RouteComponentProps> = (props) => {
  const [data, setData] = useState<IPostDetail>({ id: '', title: '' });
  const params: { [key: string]: string } = props.match.params;

  useEffect(() => {
    axios.get(`/api/post/${ params.postId }`).then((res) => {
      setData(res.data);
    });
  }, []);

  const { id, title } = data;
  return (
    <div className={ `post-${ id }` }>
      <h1>{ title }</h1>
    </div>
  );
};

export default withRouter(PostDetailPage);
