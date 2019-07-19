import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import axios from 'axios';
import { Button, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";

const PostsPage: FunctionComponent<RouteComponentProps> = () => {
  const [data, setData] = useState<IPostDetail[]>([]);

  useEffect(() => {
    axios.get(`/api/post`).then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data.length) {
    return <div>No posts available.</div>
  }

  return (
    <Container className="mt-5">
      <Table dark className="posts-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          data.map(({ id, title }) =>
            (
              <tr key={ id }>
                <th scope="row">{ id }</th>
                <td><Link to={ `/post/${ id }` }>{ title }</Link></td>
                <td><Button color="danger">Remove</Button></td>
              </tr>
            )
          )
        }
      </Table>
    </Container>
  );
};

export default withRouter(PostsPage);
