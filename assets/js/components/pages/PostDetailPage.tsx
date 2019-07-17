import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import axios from 'axios';

const PostDetailPage: FunctionComponent<RouteComponentProps> = (props) => {
  const [data, setData] = useState({ hits: [] });
  const params: {[key: string]: string } = props.match.params;

  useEffect(() => {
    axios.get(`/api/post/${ params.postId }`).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      post detail
    </div>
  );
};

export default withRouter(PostDetailPage);
