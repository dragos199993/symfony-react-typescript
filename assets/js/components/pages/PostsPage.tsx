import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import axios from '../../config/axios';
import { Button, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { POST, REMOVE } from "../../constants/axios-paths";

const PostsPage: FunctionComponent<RouteComponentProps> = () => {
  const [data, setData] = useState<IPostDetail[]>([]);
  const [isDeleted, setIsDeleted] = useState<boolean>(null);

  useEffect(() => {
    axios.get(POST).then((res) => {
      setData(res.data);
    });
  }, [isDeleted]);

  if (!data.length) {
    return <div>No posts available.</div>
  }

  const removePost = (id: string) => {
    axios.delete(`${ POST }${ REMOVE }/${ id }`).then((res) => {
      if(res.data.deleted === true) {
        setIsDeleted(true);
      }
    });
    setIsDeleted(false);
  };

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
                <td><Link to={ `${ POST }/${ id }` }>{ title }</Link></td>
                <td>
                  <Button
                    onClick={ () => removePost(id) }
                    color="danger">
                    Remove
                  </Button>
                </td>
              </tr>
            )
          )
        }
      </Table>
    </Container>
  );
};

export default withRouter(PostsPage);
